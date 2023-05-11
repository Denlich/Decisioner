import pollModel from "../models/poll-model.js";

export const vote = async (id, variant, userId) => {
  const poll = await pollModel.findOne({ _id: id });
  if (!poll) {
    throw new Error("Not found");
  }

  if (poll.voted_users.includes(userId)) {
    throw new Error("User already voted");
  }

  const result = await pollModel.updateOne(
    { _id: id, voted_users: { $ne: userId } },
    {
      $push: { voted_users: userId },
      $inc: { ["variants." + variant + ".votes"]: 1 },
    }
  );

  return { message: "Success" };
};
