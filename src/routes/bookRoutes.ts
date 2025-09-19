import { Router } from "express";
import {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook,
    getRecommendations,
    getAvailableBooks,
} from "../controllers/bookController";

const router: Router = Router();

/**
 * Define routes for book Management
 */
router.get("/", getAllBooks);
router.get("/available", getAvailableBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.post("/:id/borrow", borrowBook);
router.post("/:id/return", returnBook);
router.get("/recommendations", getRecommendations);

export default router;
