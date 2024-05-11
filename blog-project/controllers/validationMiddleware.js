module.exports = (req, res, next) => {
    if (req.files == null || req.body.title == null) {
        console.log('we have problem', req.url)
        return res.redirect('/post/new')
    }
    console.log(req.files, req.body.title)
    next()
}
