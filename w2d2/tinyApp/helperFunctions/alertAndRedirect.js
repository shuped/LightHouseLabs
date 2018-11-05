module.exports = function alertAndRedirect(alertMessage, endpoint) {
  return `"<script>window.alert("${alertMessage}");window.location.replace("${endpoint}");</script>"`;
};
