const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories route
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    });

    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a category by its `id` route
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!oneCategory) {
      res.status(404).json({ message: `No product found with that id` });
      return;
    }

    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category route
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a category by its `id` route
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a category by its `id` route
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy(
      {
        where: {
          id: req.params.id,
        }
      }
    )
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;