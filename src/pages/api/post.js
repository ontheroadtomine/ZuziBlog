
export default function handler(req, res) {
    console.log("page api");
    res.status(200).json({ page: 'from page api' });
}