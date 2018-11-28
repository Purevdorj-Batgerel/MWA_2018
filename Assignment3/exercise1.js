const dns = require('dns');
const {promisify} = require('util');

/** Normal Callback 1900 way */
dns.resolve4("www.mum.edu", (err, addresses) => {
    if (err) throw err;

    console.log(addresses[0]);
});


/** Promise way 2000 way */
const resolve4Async = promisify(dns.resolve4);

resolve4Async("www.mum.edu")
    .then(addresses => console.log(addresses[0]))
    .catch(err => console.error(err));


/** Async Await 2018 way */
async function resolve4AsyncWait() {
    try {
        const addresses = await resolve4Async("www.mum.edu");
        console.log(addresses[0]);
    } catch (err) {
        console.error(err);
    }
}
resolve4AsyncWait();