import { UserData, UserOutputData } from "../../types";

export default interface IUserPresentator {
    serialize(params: UserData): UserOutputData;
    serialize(params: UserData[]): UserOutputData[];
}
