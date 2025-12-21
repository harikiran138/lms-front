import mongoose, { Schema, Model, models } from 'mongoose';

// User Schema (Proxy for Supabase Auth + Profile)
const UserSchema = new Schema({
  supabaseId: { type: String, unique: true, required: true }, // To link with auth
  email: { type: String, unique: true, required: true },
  fullName: String,
  username: { type: String, unique: true },
  avatarUrl: String,
  role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' },
  createdAt: { type: Date, default: Date.now },
});

export const User = models.User || mongoose.model('User', UserSchema);

// Course Category
const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: String,
});
export const Category = models.Category || mongoose.model('Category', CategorySchema);

// Course Schema
const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  thumbnailUrl: String,
  authorId: { type: String, ref: 'User' }, // supabaseId
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  tags: [String],
  status: { type: String, enum: ['published', 'draft', 'archived'], default: 'draft' },
  publishedAt: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});
export const Course = models.Course || mongoose.model('Course', CourseSchema);

// Lesson Schema
const LessonSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  content: String,
  videoUrl: String,
  sequence: Number,
  status: { type: String, enum: ['published', 'draft', 'archived'], default: 'draft' },
  createdAt: { type: Date, default: Date.now },
});
export const Lesson = models.Lesson || mongoose.model('Lesson', LessonSchema);
