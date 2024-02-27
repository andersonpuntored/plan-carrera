export const getUsers = async () => {
    try {
        const response = await fetch('https://random-data-api.com/api/v2/users?size=10&response_type=json')
        if (!response.ok) {
            throw new Error('Error fetching users')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching users:', error)
        throw error
    }
}