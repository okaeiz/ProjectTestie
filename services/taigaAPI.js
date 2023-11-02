const TAIGA_BASE_URL = 'https://taiga.sarmadinst.ir/api/v1';
const EXPRESS_BASE_URL = 'http://192.168.0.8:5000'; // My local IP address


export const authenticateWithTaiga = async (username, password) => {
  const endpoint = `${TAIGA_BASE_URL}/auth`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'normal',
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.auth_token;  // This is the authentication token
    } else {
      throw new Error(data._error_message);
    }
  } catch (error) {
    console.error('Error authenticating with Taiga:', error);
    throw error;
  }
};

export const getProjects = async (authToken) => {
  const endpoint = `${BASE_URL}/projects/5`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;  // This will be the list of projects
    } else {
      throw new Error('Failed to fetch projects');
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchUserDetails = async (authToken) => {
  const endpoint = `${TAIGA_BASE_URL}/users/me`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;  // This will be the user's details
    } else {
      throw new Error('Failed to fetch user details');
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const fetchCurrentMilestone = async (projId) => {
  const endpoint = `${EXPRESS_BASE_URL}/current-milestone?projId=${projId}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error('Failed to fetch current milestone from Express');
    }
  } catch (error) {
    console.error('Error fetching from Express:', error);
    throw error;
  }
};

export const fetchCurrentProject = async (userId) => {
  const endpoint = `${EXPRESS_BASE_URL}/projects?userId=${userId}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (response.ok) {
      console.log(data)
      return data;
    } else {
      throw new Error('Failed to fetch from Express');
    }
  } catch (error) {
    console.error('Error fetching from Express:', error);
    throw error;
  }
};

// Assuming that 'fetchCurrentMilestone' is imported in the same file
export const setSprintPlanning = async (projId) => {
  try {
    // First, get the current milestone ID for the project
    const milestone = await fetchCurrentMilestone(projId);

    // Here we ensure that we're extracting an integer ID from the milestone object
    const milestoneId = parseInt(milestone.id, 10); // Using parseInt to convert to integer
    
    // Ensure that projId is also an integer
    const projectId = parseInt(projId, 10); // Using parseInt to convert to integer

    // Then, make the planning request with the retrieved milestone ID
    const endpoint = `${EXPRESS_BASE_URL}/planning`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any other headers like 'Authorization' if required
      },
      body: JSON.stringify({
        project_id: projectId, // Ensuring project_id is an integer
        milestone_id: milestoneId, // Ensuring milestone_id is an integer
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return data; // This will be the response after setting the sprint planning
    } else {
      // Since error logging is not desired, we throw an error for the catch block to handle
      throw new Error(data.message || 'Failed to set sprint planning');
    }
  } catch (error) {
    // Propagate the error up to the caller
    throw error;
  }
};





