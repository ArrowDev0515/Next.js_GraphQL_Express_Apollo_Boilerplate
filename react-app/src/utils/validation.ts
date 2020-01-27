/* eslint-disable no-useless-escape */
/**
 * Email Validation
 * @author Anurag Garg <garganurag893@gmail.com>
 */

const validateEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export { validateEmail };
