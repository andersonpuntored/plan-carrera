import { defineStore } from 'pinia'
import GeneralUserModel from "~/api/models/GeneralUserModel";

export const userStore = defineStore({
    id: 'user',
    state: () => ({
        generalUserModel: [] as GeneralUserModel[]
    }),
    actions: {
        setGeneralUserModel(getGeneralUserModel: GeneralUserModel[]) {
            this.generalUserModel = getGeneralUserModel
        }
    }
})