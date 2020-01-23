/**
 * Define model for user
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import mongoose from 'mongoose';

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((user: any) => {
        if (user) {
          return user;
        }
      });
  }
};

export default mongoose.model('User', userSchema);
