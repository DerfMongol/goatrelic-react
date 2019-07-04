const receiveTreeData = (data, type) => ({
    type,
    data
})

const get = (path, type) => async (dispatch, getState, api) => {
    const res = await api.get(path, {withCredentials: true})
    dispatch(receiveTreeData(res.data, type))
}

const del = (path, type, data) => async (dispatch, getState, api) => {
    const res = await api.delete(path, {data})
    dispatch(receiveTreeData(res.data, type))
}

const post = (path, type, sportList) => async (dispatch, getState, api) => {
    const res = await api.post(path, sportList)
    dispatch({type, data: res})
}

export { get, del, post }