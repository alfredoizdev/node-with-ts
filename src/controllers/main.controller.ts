import { Request, Response } from 'express';

interface Iresponse {
    firstName: string;
    lastName: string;
    clientId: string;
}

export const v1Controller = (req: Request, res: Response) => {
    const { data } = req.body;

    const firstName = data.substr(0, 8);
    const lastName = data.substr(8, 18);
    const clientId = data.substr(18, 24)

    res.status(200).send({
        data: {
            firstName,
            lastName,
            clientId,
        }
    });
}

export const v2Controller = (req: Request, res: Response) => {
    const { data } = req.body;

    const newData = data.replace("0000", "-").replace("000", "-");
    const splitData = newData.split("-");
    const [firstName, lastName, id] = splitData;

    res.status(200).send({
        data: {
            firstName,
            lastName,
            clientId: `${id.substr(0, 3)}-${id.substr(3, 6)}`
        }
    });
}