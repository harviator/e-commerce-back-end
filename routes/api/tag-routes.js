const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tag route with its associated Product data
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product, through:ProductTag }]
    });

    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single tag by its `id` route with its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through:ProductTag }]
    });

    res.status(200).json(oneTag);
  } catch {
    res.status(500).json(err);
  }
});

// Create a new tag route
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)

    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag's name by its `id` route
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a tag by its `id` route
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy(
      {
        where: {
          id: req.params.id,
        }
      }
    )
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
