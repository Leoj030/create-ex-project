/**
 * A handler that responds with 'Hello World!' when called.
 *
 * @param {Request} req
 * @param {Response} res
 */
const getHello = async (req, res) => {
    res.json({ message: 'Hello World' });
};

export default getHello;
