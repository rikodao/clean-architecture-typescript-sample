import { UserData, UserOutputData } from "../../types";

export default interface IUserPresentator {
    serialize(params: UserData | UserData[]): UserOutputData | UserOutputData[];
}
