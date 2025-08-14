import fs from "fs/promises";
import { join } from "path";

export const loadData = async <T>(relativePath: string): Promise<T> => {
    const absolutePath = join(process.cwd(), relativePath);
    const raw = await fs.readFile(absolutePath, "utf-8");
    return JSON.parse(raw) as T;
};