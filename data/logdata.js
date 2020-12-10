function LogData(level, timestamp, fileName, lineNumber, message) {
    this.level = level  || null;
    this.timestamp = timestamp  || null;
    this.fileName = fileName  || null;
    this.lineNumber = lineNumber  || null;
    this.message = message  || null;
}

LogData.prototype.getLevel = function() {
    return level;
}

LogData.prototype.setLevel = function(level) {
    this.level = level;
}

LogData.prototype.getTimestamp = function() {
    return timestamp;
}

LogData.prototype.setTimestamp = function(timestamp) {
    this.timestamp = timestamp;
}

LogData.prototype.getFileName = function() {
    return fileName;
}

LogData.prototype.setFileName = function(fileName) {
    this.fileName = fileName;
}

LogData.prototype.getLineNumber = function() {
    return lineNumber;
}

LogData.prototype.setLineNumber = function(lineNumber) {
    this.lineNumber = lineNumber;
}

LogData.prototype.getMessage = function() {
    return message;
}

LogData.prototype.setMessage = function(message) {
    this.message = message;
}

module.exports = LogData;