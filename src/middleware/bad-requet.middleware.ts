import { Request, Response, NextFunction } from 'express'

export const badRequestMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400)
            .send({
                message: "need suplay data"
            })
    }

    next();
}