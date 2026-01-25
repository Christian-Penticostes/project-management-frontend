import api from "../axios";

// Get All Tasks

export const getTasks = async (token) => {
    const response = await api.get('/tasks', {
        headers : {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
}

// Create New Task

export const createTask = async (taskData, token) => {
    const response = await api.post('/tasks', taskData, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}

// Edit Task

export const updateTask = async (id, taskData, token) => {
  const response = await api.put(`/tasks/${id}`, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete Task

export const deleteTask = async (id, token) => {
    const response = await api.delete(`tasks/${id}`, {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
    return response;
}