import pollModel from "../models/poll-model.js";
import * as PollService from "../services/poll-service.js";

export const getAll = async (req, res) => {
  try {
    const { search } = req.query;
    const result = await PollService.getAll(search);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};

export const getOne = async (req, res) => {
  try {
    const pollId = req.params.id;

    pollModel
      .findOneAndUpdate(
        { _id: pollId },
        { $inc: { viewsCount: 1 } },
        { returnDocument: "after" }
      )
      .populate("user", "-password")
      .then((doc) => {
        res.json(doc);
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Не удалось вернуть статью",
        });
      });
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

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

export const vote = async (req, res) => {
  try {
    const { id, variant } = req.params;
    const userId = req.userId;
    const result = await PollService.vote(id, variant, userId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    pollModel
      .findOneAndDelete({ _id: id })
      .then((poll) => res.json({ success: true }));
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Could not find a poll");
  }
};

export const update = async (req, res) => {
  try {
    const { isActive } = req.body;
    const pollId = req.params.id;

    await pollModel.findOneAndUpdate(
      { _id: pollId },
      {
        user: req.userId,
        isActive,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};
