export default class AddressUserModel {
    city: string
    street_name: string
    street_address:string
    zip_code:string
    state:string
    country:string

    constructor(
        city: string = '',
        street_name: string = '',
        street_address: string = '',
        zip_code: string = '',
        state: string = '',
        country: string = ''
    ) {
        this.city = city
        this.street_name = street_name
        this.street_address = street_address
        this.zip_code = zip_code
        this.state = state
        this.country = country
    }
}