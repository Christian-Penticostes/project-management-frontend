import api from "../axios";

// Get All Projects

export const getAllProject = async (token) => {
    try {
        const response = await api.get('/projects', {
            headers : {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch(error) {
        console.log("Error fetching projects: ", error);
    }
}

// Get Project Details

export const getProjectDetails = async (id, token) => {
    const response = await api.get(`/projects/${id}`, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}

// Add Project

export const addProject = async (projectData, token) => {
    const response = await api.post('/projects', projectData, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}

// Edit Project

export const editProject = async (id, token) => {
    const response = await api.get(`/projects/${id}`, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}

// Delete Project

export const deleteProject = async (id, token) => {
    const response = await api.delete(`projects/${id}`, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}