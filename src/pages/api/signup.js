import HttpResult from "@/common/HttpResult";
import { createUser } from "@/db/userDao";
import { log } from "@/util/log";

export default async function handler(req, res) {
    console.log(`handler`, req.body)
    const { username, password } = req.body;
    log(`${username},${password}`)
    if (!username || !password) {
        res.status(200).json(new HttpResult(200, null, "参数不对"))
        return
    }
    try {
        const user = await createUser({ username, password });
        res.status(200).json()
    } catch (error) {
        console.log(error);
        res.status(500).json(HttpResult(1000, null, "注册失败"))
    }

}