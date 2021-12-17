import { callData } from "../../../data/callData";

export default function handler(req, res) {
    res.status(200).json(callData)
}