const fetch = require('node-fetch');
const readline = require('readline');

const bypassUrl = async (url) => {
    try {
        const response = await fetch(url)
        const result = await response.text()

        let titleRegex = /<h1 class='post-title entry-title'>(.+?)<\/h1>/g
        let resTitle = titleRegex.exec(result)

        console.log('\x1b[32m%s\x1b[0m', `[+] Software Name : ${resTitle[1]}`)
        console.log('\x1b[32m%s\x1b[0m', `[+] Result        :\n`)

        let resRegex = /<p>=&gt; <a href="(.+?)" (.+?)via(.+?)<\/p>/g,
            arr;

        do {
            arr = resRegex.exec(result);
            if (arr) {
                console.log('\x1b[32m%s\x1b[0m', `  [+] Server Name   :${arr[3]}`)
                console.log('\x1b[32m%s\x1b[0m', `  [+] Download URL  : ${arr[1]}\n`)
            }
        } while (arr)

    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', `[-] Check Your URL Again .. `)
    }
}

const start = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    console.log('\x1b[34m%s\x1b[0m', '+================================================+')
    console.log('\x1b[34m%s\x1b[0m', '| Kuyhaa Ads Bypassser                           |')
    console.log('\x1b[34m%s\x1b[0m', '| Coded by Parasit                               |')
    console.log('\x1b[34m%s\x1b[0m', '+================================================+')
    rl.question(`\x1b[34mInput URL : `, (url) => {
        console.log('\x1b[34m%s\x1b[0m', '\n[+] Getting URL . . . \n')
        bypassUrl(url);
        rl.close()
    })
}

start()