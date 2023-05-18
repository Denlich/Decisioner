import pollModel from "../models/poll-model.js";

export const vote = async (id, variantId, userId) => {
  const poll = await pollModel.findOne({ _id: id });

  if (!poll) {
    throw new Error("Not found");
  }

  if (!poll.isActive) {
    throw new Error("Poll is closed");
  }

  if (poll.voted_users.includes(userId)) {
    throw new Error("User already voted");
  }

  const variantIndex = poll.variants.findIndex(
    (variant) => String(variant._id) === variantId
  );

  const result = await pollModel.updateOne(
    { _id: id, voted_users: { $ne: userId } },
    {
      $push: { voted_users: userId },
      $inc: { [`variants.${variantIndex}.votes`]: 1, votes: 1 },
    }
  );

  return result;
};
