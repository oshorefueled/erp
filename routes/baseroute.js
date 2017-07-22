/**
 * Created by osho on 5/21/17.
 */

function sendSuccess(data) {
    return {"status": "success", "data":data }
}
function sendError(message) {
    return {"status": "error", "message":message }
}


module.exports = {
  sendSuccess: sendSuccess,
  sendError: sendError
};