'use strict'

var http = require('http')
const querystring = require('querystring');
const postData = querystring.stringify({
    'email': 'kleberkruger@hotmail.com',
    'senha': 1234
});
console.log(postData)
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/autentica',
    // data: postData,
    method: 'POST',
    headers: {
        'Content-Type': postData,
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
            // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiY3BmIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsImNyaWFkYV9lbSI6ImluaXQiLCJfX3YiOiJpbml0IiwidGVsZWZvbmUiOiJpbml0Iiwic2V4byI6ImluaXQiLCJzZW5oYSI6ImluaXQiLCJub21lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiY3JpYWRhX2VtIjp0cnVlLCJ0ZWxlZm9uZSI6dHJ1ZSwiY3BmIjp0cnVlLCJzZXhvIjp0cnVlLCJzZW5oYSI6dHJ1ZSwiZW1haWwiOnRydWUsIm5vbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJjcmlhZGFfZW0iOiIyMDE3LTA1LTE4VDIzOjIwOjEyLjMyOVoiLCJfX3YiOjAsInRlbGVmb25lIjo5OTk1MDc5NzksImNwZiI6IjA0NjM0NTAxMTYzMiIsInNleG8iOiJGIiwic2VuaGEiOiIkMmEkMDUkUll4RmMxdjFpS1hQRFdpQWVZR1hDZW0vc3F2WnpNRFVWZTgvZDBjeDVGRDN4dlJqT25mUGkiLCJlbWFpbCI6ImtsZWJlcmtydWdlckBob3RtYWlsLmNvbSIsIm5vbWUiOiJLbGViZXJrcnVnZXIiLCJfaWQiOiI1OTFlMmNmMGZhMmZjMDI4YmNiODEwOTkifSwiaWF0IjoxNDk1MTcyNDExLCJleHAiOjE0OTUyNTg4MTF9.Vjq0CzUt6461N_D1DPRTioqm6Uk6VjpxLpaeWxsGvuc'
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();