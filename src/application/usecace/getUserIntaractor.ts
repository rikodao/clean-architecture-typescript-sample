import userRepository from "../repository/userMemoryRepository"
export default class GetUserIntaractor {
    _userRepository: userRepository
    constructor(userRepository: userRepository) {
        this._userRepository = userRepository

    }

    handle(): { id: string, name: string, age: number } {
        const user = this._userRepository.getUser()
        return user.value

    }
}