import { RegisterNewUser } from './RegisterNewUser';
import { EmailAlreadyInUse } from '../errors/EmailAlreadyInUse';
import { UsernameAlreadyInUse } from '../errors/UsernameAlreadyInUse';

const mockUserRepository = {
  getUserByEmail: jest.fn(),
  getUserByUsername: jest.fn(),
  createUser: jest.fn(),
};

describe('RegisterNewUser Use Case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user if email and username are unique', async () => {
    const newUser = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    };

    mockUserRepository.getUserByEmail.mockResolvedValue(null);
    mockUserRepository.getUserByUsername.mockResolvedValue(null);
    mockUserRepository.createUser.mockResolvedValue(newUser);

    const registerUseCase = RegisterNewUser({
      data: newUser,
      dependencies: { userRepository: mockUserRepository },
    });

    const result = await registerUseCase.execute();

    expect(mockUserRepository.getUserByEmail).toHaveBeenCalledWith(newUser.email);
    expect(mockUserRepository.getUserByUsername).toHaveBeenCalledWith(newUser.username);
    expect(mockUserRepository.createUser).toHaveBeenCalledWith(newUser);
    expect(result).toEqual(newUser);
  });

  it('should throw EmailAlreadyInUse error if email is already taken', async () => {
    const newUser = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    };

    mockUserRepository.getUserByEmail.mockResolvedValue({ id: 1, email: newUser.email });

    const registerUseCase = RegisterNewUser({
      data: newUser,
      dependencies: { userRepository: mockUserRepository },
    });

    // Act & Assert
    await expect(registerUseCase.execute()).rejects.toThrow(EmailAlreadyInUse);
    expect(mockUserRepository.getUserByEmail).toHaveBeenCalledWith(newUser.email);
    expect(mockUserRepository.getUserByUsername).not.toHaveBeenCalled();
    expect(mockUserRepository.createUser).not.toHaveBeenCalled();
  });

  it('should throw UsernameAlreadyInUse error if username is already taken', async () => {
    // Arrange
    const newUser = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    };

    mockUserRepository.getUserByEmail.mockResolvedValue(null);  
    mockUserRepository.getUserByUsername.mockResolvedValue({ id: 2, username: newUser.username });  

    const registerUseCase = RegisterNewUser({
      data: newUser,
      dependencies: { userRepository: mockUserRepository },
    });

    // Act & Assert
    await expect(registerUseCase.execute()).rejects.toThrow(UsernameAlreadyInUse);
    expect(mockUserRepository.getUserByEmail).toHaveBeenCalledWith(newUser.email);
    expect(mockUserRepository.getUserByUsername).toHaveBeenCalledWith(newUser.username);
    expect(mockUserRepository.createUser).not.toHaveBeenCalled();
  });
});
