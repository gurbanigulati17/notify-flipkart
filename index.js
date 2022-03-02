const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

async function getProductNotify() {
    try {
        const siteUrl = 'https://www.flipkart.com/fortune-refined-soyabean-oil-pouch/p/itm9bac03ce25222'

        const { data } = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector = '._2uS5ZX'

        let product = $(elemSelector)
        console.log(product.text())

    } catch (err) {
        console.error(err)
    }
}

getProductNotify()
