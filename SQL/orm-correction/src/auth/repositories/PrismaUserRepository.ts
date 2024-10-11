import { prisma } from '../..';
import { CreateUser, GetUserByEmail, GetUserByUsername } from "../interfaces/UserRepository";

type _PrismaUserRepository = CreateUser & GetUserByEmail & GetUserByUsername;
export const PrismaUserRepository = (): _PrismaUserRepository => {
	return {
		createUser: async function (user) {
			return prisma.user.create({
				data: {
					email: user.email,
					username: user.username,
					password: user.password,
				}
			});
		},
		getUserByEmail: async function (email) {
			return prisma.user.findUnique({
				where: { email: email }
			})
		},
		getUserByUsername: async function (username) {
			return prisma.user.findUnique({
				where: { username: username }
			})
		},
	};
};
