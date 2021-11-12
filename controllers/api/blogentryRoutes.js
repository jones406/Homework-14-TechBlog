const router = require('express').Router();
const { BlogEntry } = require('../../models');
const withAuth = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newBlogEntry = await BlogEntry.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newBlogEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/edit/:id', async (req, res) => {
    try {
        console.log(req.body)
        const updateBlogEntry = await BlogEntry.update(
        { name: req.body.name,
        blogentry_content: req.body.blogentry_content,
        },
        { where: { id: req.body.id} }
        );
        res.status(200).json(updateBlogEntry);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
    const blogEntryData = await blogEntryData.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });

    if (!postData) {
        res.status(404).json({ message: "alsdkj"});
        return;
    }

    res.status(200).json(blogEntryData);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;