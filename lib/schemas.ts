import { z } from "zod"

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z.string().url(),
  caption: z.string().optional()
});

export const CreatePost = PostSchema.omit({ id: true });
export const UpdatePost = PostSchema
export const DeletePost = PostSchema.pick({ id: true });

export const LikeSchema = z.object({
  postId: z.string(),
});

export const BookmarkSchema = z.object({
  postId: z.string(),
})


