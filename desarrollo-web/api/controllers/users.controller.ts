import GeneralUserModel from '~/api/models/GeneralUserModel'

export const getUsers = async (): Promise<GeneralUserModel[]> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(config.public.apiBackUrl)
        if (!response.ok) {
            throw new Error('Error fetching users')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching users:', error)
        throw error
    }
}