const express = require("express");
const router = express.Router();

const { create, list, read, update, remove, removeSoft } = require("../controllers/category");

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create Category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Category"
 *     responses:
 *       200: 
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Category"
 *       400:
 *         description: bad request     
 */
router.post("/category", create);

// SCHEMAS
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *            type: string
 *            trim: true
 *            minlength: 2
 *            maxlength: 32
 *         slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *         status:
 *            type: string
 *            default: "Active"
 *            enum:
 *            - "Active"
 *            - "Inactive"
 *       example:
 *         name: Fashion
 *         slug: fashion
 *         status: Active      
 */

router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.delete("/category/:slug", remove);
router.patch("/category/:slug", removeSoft);

 module.exports = router;


