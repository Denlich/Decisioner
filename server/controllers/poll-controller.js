import pollModel from "../models/poll-model.js";

export const createPoll = async (req, res) => {
  try {
    const { title, subtitle, variants } = req.body;
    const poll = await pollModel.create({
      title,
      subtitle,
      variants,
      user: req.userId,
    });
    res.json(poll);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message);
  }
};
