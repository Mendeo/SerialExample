'use strict';
const { SerialPort } = require('serialport');
const portName = process.argv[2];
const serialport = new SerialPort({ path: portName, baudRate: 9600 });
serialport.on('data', (chunk) =>
{
	process.stdout.write(chunk);
});
process.stdin.on('data', (chunk) =>
{
	serialport.write(chunk);
});