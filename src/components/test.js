import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  companyName: Scalars['String'];
  id: Scalars['Float'];
  ownerId: Scalars['Float'];
};

export type AccountPackage = {
  __typename?: 'AccountPackage';
  authorsLimit: Scalars['Float'];
  customerId?: Maybe<Scalars['String']>;
  expirationDate: Scalars['Timestamp'];
  id: Scalars['Float'];
  linesLimit: Scalars['Float'];
  planName: Scalars['String'];
  usersLimit: Scalars['Float'];
};

export type Author = {
  __typename?: 'Author';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastChange: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  profileId?: Maybe<Scalars['Float']>;
};

export type AuthorInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileInput>;
  profileId?: InputMaybe<Scalars['Float']>;
};

export type CloneRepo = {
  link: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ConfirmResetPasswordInput = {
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ConfirmResetPasswordResponse = {
  __typename?: 'ConfirmResetPasswordResponse';
  /** Confirm Password Message Response */
  message: Scalars['String'];
};

export type ContributionFilter = {
  depth?: InputMaybe<Scalars['Float']>;
  directoryId?: InputMaybe<Scalars['Float']>;
  fileId?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Scalars['Float']>;
  group?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  per?: InputMaybe<Scalars['String']>;
  profileId?: InputMaybe<Scalars['Float']>;
  recursive?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type CreateImportResponse = {
  __typename?: 'CreateImportResponse';
  run: Scalars['String'];
};

export type CreateProfileInput = {
  /** The id of the first author to assign */
  authorId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  /** The id of the current run */
  runId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type DateNameValue = {
  __typename?: 'DateNameValue';
  color?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type DepthDirectoryInput = {
  __typename?: 'DepthDirectoryInput';
  id: Scalars['Float'];
  name: Scalars['String'];
  team?: Maybe<DepthTeamInput>;
  value: Scalars['Float'];
};

export type DepthNotesDto = {
  __typename?: 'DepthNotesDto';
  depth: Scalars['Float'];
  directories?: Maybe<Array<DepthDirectoryInput>>;
};

export type DepthProfileInput = {
  __typename?: 'DepthProfileInput';
  color: Scalars['String'];
  ex: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type DepthTeamInput = {
  __typename?: 'DepthTeamInput';
  color: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  profile?: Maybe<DepthProfileInput>;
  value: Scalars['Float'];
};

export type Directory = {
  __typename?: 'Directory';
  children?: Maybe<Array<Directory>>;
  contribution: Array<NameValue>;
  countFilesOfDirectory: Scalars['Float'];
  depth: Scalars['Float'];
  exContributions: Array<NameValue>;
  files: Array<File>;
  id?: Maybe<Scalars['Float']>;
  left?: Maybe<Directory>;
  lines: Scalars['Float'];
  maxDepth: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Directory>;
  parentId?: Maybe<Scalars['Float']>;
  path?: Maybe<Scalars['String']>;
  profilesContributions: Array<NameValue>;
  right?: Maybe<Directory>;
  teamsContribution: Array<NameValue>;
};


export type DirectoryContributionArgs = {
  filter: ContributionFilter;
};


export type DirectoryLinesArgs = {
  filter: ContributionFilter;
};

export type DirectoryFilter = {
  depth?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['Float']>;
  path?: InputMaybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  contribution: Array<NameValue>;
  exContributions: Array<NameValue>;
  ext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  profilesContributions: Array<NameValue>;
  teamsContribution: Array<NameValue>;
};


export type FileContributionArgs = {
  filter?: InputMaybe<ContributionFilter>;
};

export type FileFilter = {
  directoryId?: InputMaybe<Scalars['Float']>;
};

export type FileUploadInput = {
  file: Scalars['Upload'];
};

export type ForgetPasswordResponse = {
  __typename?: 'ForgetPasswordResponse';
  /** Forget Password Message Response */
  message: Scalars['String'];
};

export type GithubRepo = {
  __typename?: 'GithubRepo';
  branch?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type GithubRepoInput = {
  branch?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type JwtToken = {
  __typename?: 'JwtToken';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAmidn: Scalars['String'];
  addUsersToAccount: Scalars['String'];
  assignAuthorToProfile: Author;
  cloneRepo: Run;
  confirmResetPassword: ConfirmResetPasswordResponse;
  createProfile: Profile;
  createProfilesBasedOnSimilarity: Scalars['String'];
  developersWithLowContribution: Scalars['String'];
  developersWorkingTogether: Scalars['String'];
  forgetPassword: ForgetPasswordResponse;
  import: CreateImportResponse;
  login: JwtToken;
  logout: JwtToken;
  markProfileAsEx: Profile;
  removeAmidn: Scalars['String'];
  removeTeam: Scalars['String'];
  removeUserFromAccount: Scalars['String'];
  selectARepo: Run;
  setTeamIDForProfileWithNull: Scalars['String'];
  signup: UserResponse;
  storeProfiles: Scalars['String'];
  storeTeams: Scalars['String'];
  unassignAuthorToProfile: Author;
  updateRunName: Run;
};


export type MutationAddAmidnArgs = {
  userId: Scalars['Float'];
};


export type MutationAddUsersToAccountArgs = {
  userEmail: Scalars['String'];
};


export type MutationAssignAuthorToProfileArgs = {
  authorId: Scalars['Float'];
  profileId: Scalars['Float'];
};


export type MutationCloneRepoArgs = {
  repo: CloneRepo;
};


export type MutationConfirmResetPasswordArgs = {
  ConfirmResetPasswordInput: ConfirmResetPasswordInput;
};


export type MutationCreateProfileArgs = {
  CreateProfileInput: CreateProfileInput;
};


export type MutationCreateProfilesBasedOnSimilarityArgs = {
  runId: Scalars['String'];
};


export type MutationDevelopersWithLowContributionArgs = {
  contribution: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationDevelopersWorkingTogetherArgs = {
  runId: Scalars['String'];
  teamsNumber: Scalars['Float'];
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationImportArgs = {
  files: FileUploadInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMarkProfileAsExArgs = {
  exState: Scalars['Boolean'];
  profileId: Scalars['Float'];
};


export type MutationRemoveAmidnArgs = {
  userId: Scalars['Float'];
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationRemoveUserFromAccountArgs = {
  userId: Scalars['Float'];
};


export type MutationSelectARepoArgs = {
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
  repo: GithubRepoInput;
};


export type MutationSetTeamIdForProfileWithNullArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationSignupArgs = {
  SignupAccountInput: SignupAccountInput;
};


export type MutationStoreProfilesArgs = {
  ProfilesAlignInput: ProfilesAlignInput;
  runId: Scalars['String'];
};


export type MutationStoreTeamsArgs = {
  runId: Scalars['String'];
  teams: Array<TeamInput>;
};


export type MutationUnassignAuthorToProfileArgs = {
  authorId: Scalars['Float'];
  profileId: Scalars['Float'];
};


export type MutationUpdateRunNameArgs = {
  runName: Scalars['String'];
  uuid: Scalars['String'];
};

export type NameValue = {
  __typename?: 'NameValue';
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type NameValueInput = {
  color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type Profile = {
  __typename?: 'Profile';
  authorIds?: Maybe<Array<Scalars['Float']>>;
  authors?: Maybe<Array<Author>>;
  color?: Maybe<Scalars['String']>;
  ex?: Maybe<Scalars['Boolean']>;
  generated?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Float']>;
  lastChange?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type ProfileAlignInput = {
  /** array of assigned authors to profile */
  authors?: InputMaybe<Array<Scalars['Float']>>;
  color?: InputMaybe<Scalars['String']>;
  /** is ex employee or not */
  ex: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProfileInput = {
  authorIds?: InputMaybe<Array<Scalars['Float']>>;
  authors?: InputMaybe<Array<AuthorInput>>;
  color?: InputMaybe<Scalars['String']>;
  ex?: InputMaybe<Scalars['Boolean']>;
  generated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProfilesAlignInput = {
  profiles: Array<ProfileAlignInput>;
};

export type Query = {
  __typename?: 'Query';
  PrContributionsPer: Array<NameValue>;
  PrContributionsPerDayPer: Array<DateNameValue>;
  PrReviewContributionsPer: Array<NameValue>;
  averagePrsTime: Array<NameValue>;
  averageReviewTime: Array<NameValue>;
  checkIfUserIsOwner: Scalars['Boolean'];
  contributionsPer: Array<NameValue>;
  contributionsPerDayPer: Array<DateNameValue>;
  countAllAccountAuthors: Scalars['Float'];
  countAllAccountLines: Scalars['Float'];
  countAuthors: Scalars['Float'];
  countDirectories: Scalars['Float'];
  countFiles: Scalars['Float'];
  countLines: Scalars['Float'];
  countPrReviews: Scalars['Float'];
  countProfiles: Scalars['Float'];
  countPullRequests: Scalars['Float'];
  countTeams: Scalars['Float'];
  depthNotes: Array<DepthNotesDto>;
  directories: Array<Directory>;
  directoriesContributedByProfile: Scalars['Float'];
  directory: Directory;
  exEmployeesLinesPerCompanyTeams: Array<NameValue>;
  featureFlags: Array<Scalars['String']>;
  files: Array<File>;
  filesContributedByProfile: Scalars['Float'];
  getAccessToken: Scalars['String'];
  getAccountData: Account;
  getAccountUsers: Array<User>;
  getAuthors: Array<Author>;
  getInstallationsList: Array<NameValue>;
  getPortalLink: Scalars['String'];
  getProfileById: Profile;
  getProfileDataById: Profile;
  getReposList: Array<GithubRepo>;
  getSubscriptionDetails: AccountPackage;
  getTeamById: Team;
  githubLoginUrl: Scalars['String'];
  githubManageInstallationsUrl: Scalars['String'];
  profiles: Array<Profile>;
  run: Run;
  runs: Array<Run>;
  search: Array<SearchResult>;
  teams: Array<Team>;
  updateRun: Run;
  whoAmI: User;
};


export type QueryPrContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryPrContributionsPerDayPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryPrReviewContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryAveragePrsTimeArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryAverageReviewTimeArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryCheckIfUserIsOwnerArgs = {
  email: Scalars['String'];
};


export type QueryContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryContributionsPerDayPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryCountAuthorsArgs = {
  runId: Scalars['String'];
};


export type QueryCountDirectoriesArgs = {
  runId: Scalars['String'];
};


export type QueryCountFilesArgs = {
  runId: Scalars['String'];
};


export type QueryCountLinesArgs = {
  runId: Scalars['String'];
};


export type QueryCountPrReviewsArgs = {
  runId: Scalars['String'];
};


export type QueryCountProfilesArgs = {
  runId: Scalars['String'];
};


export type QueryCountPullRequestsArgs = {
  runId: Scalars['String'];
};


export type QueryCountTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryDepthNotesArgs = {
  runId: Scalars['String'];
};


export type QueryDirectoriesArgs = {
  filter: DirectoryFilter;
  runId: Scalars['String'];
};


export type QueryDirectoriesContributedByProfileArgs = {
  profileId: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryDirectoryArgs = {
  filter: DirectoryFilter;
  runId: Scalars['String'];
};


export type QueryExEmployeesLinesPerCompanyTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryFilesArgs = {
  filter: FileFilter;
  runId: Scalars['String'];
};


export type QueryFilesContributedByProfileArgs = {
  profileId: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryGetAccessTokenArgs = {
  code: Scalars['String'];
};


export type QueryGetAuthorsArgs = {
  profileId?: InputMaybe<Scalars['Float']>;
  runId: Scalars['String'];
};


export type QueryGetInstallationsListArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetProfileDataByIdArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryGetReposListArgs = {
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
};


export type QueryGetTeamByIdArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryProfilesArgs = {
  assigned?: InputMaybe<Scalars['Boolean']>;
  runId: Scalars['String'];
};


export type QueryRunArgs = {
  runId: Scalars['String'];
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};


export type QueryTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryUpdateRunArgs = {
  runId: Scalars['String'];
};

export type Run = {
  __typename?: 'Run';
  beingHandled: Scalars['Boolean'];
  commitId?: Maybe<Scalars['String']>;
  countProfiles: Scalars['Float'];
  countTeams: Scalars['Float'];
  date?: Maybe<Scalars['Timestamp']>;
  extractedFiles: Scalars['Float'];
  installationId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prBeingHandled: Scalars['Boolean'];
  repoId?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  totalFiles: Scalars['Float'];
  uuid: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  description: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  runId: Scalars['String'];
  teamId?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type SignupAccountInput = {
  companyName?: InputMaybe<Scalars['String']>;
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  profileIds?: Maybe<Array<Scalars['Float']>>;
  profiles?: Maybe<Array<Profile>>;
};

export type TeamInput = {
  color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  profileIds?: InputMaybe<Array<Scalars['Float']>>;
  profiles?: InputMaybe<Array<ProfileInput>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  isAdmin: Scalars['Boolean'];
  profilePicture?: Maybe<Scalars['String']>;
};

export type DirectoryInput = {
  children?: InputMaybe<Array<DirectoryInput>>;
  id?: InputMaybe<Scalars['Float']>;
  left?: InputMaybe<DirectoryInput>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<DirectoryInput>;
  parentId?: InputMaybe<Scalars['Float']>;
  path?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<DirectoryInput>;
};

export type FileInput = {
  ext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'userResponse';
  email: Scalars['String'];
};

export type TestQueryVariables = Exact<{
  depth: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type TestQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', path?: string | null }> };

export type FilesAndDirectoriesQueryVariables = Exact<{
  runId: Scalars['String'];
  directoryId?: InputMaybe<Scalars['Float']>;
  per?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Float']>;
}>;


export type FilesAndDirectoriesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null }>, directories: Array<{ __typename?: 'Directory', id?: number | null, name?: string | null, path?: string | null, countFilesOfDirectory: number, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type ProfilesListQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ProfilesListQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, teamId?: number | null }> };

export type ProfilesListWithNameAndTitleQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ProfilesListWithNameAndTitleQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null }> };

export type ProfileByIdQueryVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type ProfileByIdQuery = { __typename?: 'Query', getProfileDataById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, teamId?: number | null, color?: string | null, authors?: Array<{ __typename?: 'Author', id?: number | null }> | null } };

export type TeamsListWithIdAndNameQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsListWithIdAndNameQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null }> };

export type TeamsListWithProfilesQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsListWithProfilesQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, ex?: boolean | null, teamId?: number | null }> | null }> };

export type DirectoriesListQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
}>;


export type DirectoriesListQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, name?: string | null }> };

export type DirectoryTeamContributionsQueryVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type DirectoryTeamContributionsQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', id?: number | null, teamsContribution: Array<{ __typename?: 'NameValue', name?: string | null, value: number }> } };

export type MaxDepthInDirectoryQueryVariables = Exact<{
  runId: Scalars['String'];
  directoryId: Scalars['Float'];
}>;


export type MaxDepthInDirectoryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', maxDepth: number } };

export type MaxRootDepthQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type MaxRootDepthQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', maxDepth: number } };

export type DirectoriesListByDepthQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
}>;


export type DirectoriesListByDepthQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', path?: string | null }> };

export type ContributionAtDepthQueryVariables = Exact<{
  runId: Scalars['String'];
  depth: Scalars['Float'];
  contributionFilter: ContributionFilter;
}>;


export type ContributionAtDepthQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, path?: string | null, name?: string | null, contribution: Array<{ __typename?: 'NameValue', name?: string | null, value: number }> }> };

export type GetTeamByIdWithNameAndProfilesListQueryVariables = Exact<{
  runId: Scalars['String'];
  teamId: Scalars['Float'];
}>;


export type GetTeamByIdWithNameAndProfilesListQuery = { __typename?: 'Query', getTeamById: { __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null }> | null } };

export type FeatureFlagsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeatureFlagsQueryQuery = { __typename?: 'Query', featureFlags: Array<string> };

export type GetAccountDataQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountDataQueryQuery = { __typename?: 'Query', getAccountData: { __typename?: 'Account', id: number, companyName: string, ownerId: number } };

export type GetSubscriptionDetailsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionDetailsQueryQuery = { __typename?: 'Query', getSubscriptionDetails: { __typename?: 'AccountPackage', id: number, customerId?: string | null, planName: string, linesLimit: number, authorsLimit: number, usersLimit: number, expirationDate: any } };

export type GetAccountUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountUsersQueryQuery = { __typename?: 'Query', getAccountUsers: Array<{ __typename?: 'User', id: number, email: string, profilePicture?: string | null, isAdmin: boolean }> };

export type CheckIfUserIsOwnerQueryQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckIfUserIsOwnerQueryQuery = { __typename?: 'Query', checkIfUserIsOwner: boolean };

export type WhoAmIQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQueryQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: number, email: string, profilePicture?: string | null, isAdmin: boolean } };

export type CountAllAccountAuthorsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CountAllAccountAuthorsQueryQuery = { __typename?: 'Query', countAllAccountAuthors: number };

export type DirectoryQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
  directory_parent_parent_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_parent_parent_lines_filter: ContributionFilter;
  directory_parent_parent_contribution_filter: ContributionFilter;
  directory_right_right_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_right_right_lines_filter: ContributionFilter;
  directory_right_right_contribution_filter: ContributionFilter;
  directory_left_left_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_left_left_lines_filter: ContributionFilter;
  directory_left_left_contribution_filter: ContributionFilter;
  directory_children_children_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_children_children_lines_filter: ContributionFilter;
  directory_children_children_contribution_filter: ContributionFilter;
  directory_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_lines_filter: ContributionFilter;
  directory_contribution_filter: ContributionFilter;
}>;


export type DirectoryQueryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, parent?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, right?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, left?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, children?: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> | null, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } };

export type DirectoriesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
  directories_parent_parent_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_parent_parent_lines_filter: ContributionFilter;
  directories_parent_parent_contribution_filter: ContributionFilter;
  directories_right_right_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_right_right_lines_filter: ContributionFilter;
  directories_right_right_contribution_filter: ContributionFilter;
  directories_left_left_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_left_left_lines_filter: ContributionFilter;
  directories_left_left_contribution_filter: ContributionFilter;
  directories_children_children_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_children_children_lines_filter: ContributionFilter;
  directories_children_children_contribution_filter: ContributionFilter;
  directories_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_lines_filter: ContributionFilter;
  directories_contribution_filter: ContributionFilter;
}>;


export type DirectoriesQueryQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, parent?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, right?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, left?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, children?: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> | null, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type DirectoriesContributedByProfileQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  profileId: Scalars['Float'];
}>;


export type DirectoriesContributedByProfileQueryQuery = { __typename?: 'Query', directoriesContributedByProfile: number };

export type ExEmployeesLinesPerCompanyTeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ExEmployeesLinesPerCompanyTeamsQueryQuery = { __typename?: 'Query', exEmployeesLinesPerCompanyTeams: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type DepthNotesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type DepthNotesQueryQuery = { __typename?: 'Query', depthNotes: Array<{ __typename?: 'DepthNotesDto', depth: number, directories?: Array<{ __typename?: 'DepthDirectoryInput', id: number, name: string, value: number, team?: { __typename?: 'DepthTeamInput', id: number, name: string, value: number, color: string, profile?: { __typename?: 'DepthProfileInput', id: number, name: string, value: number, color: string, ex: boolean } | null } | null }> | null }> };

export type RunsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type RunsQueryQuery = { __typename?: 'Query', runs: Array<{ __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number }> };

export type RunQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type RunQueryQuery = { __typename?: 'Query', run: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type FilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: FileFilter;
  files_contribution_filter?: InputMaybe<ContributionFilter>;
}>;


export type FilesQueryQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type CountFilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountFilesQueryQuery = { __typename?: 'Query', countFiles: number };

export type CountDirectoriesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountDirectoriesQueryQuery = { __typename?: 'Query', countDirectories: number };

export type CountLinesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountLinesQueryQuery = { __typename?: 'Query', countLines: number };

export type CountAllAccountLinesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CountAllAccountLinesQueryQuery = { __typename?: 'Query', countAllAccountLines: number };

export type ContributionsPerDayPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type ContributionsPerDayPerQueryQuery = { __typename?: 'Query', contributionsPerDayPer: Array<{ __typename?: 'DateNameValue', id: number, name: string, date: string, value: number, color?: string | null }> };

export type ContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type ContributionsPerQueryQuery = { __typename?: 'Query', contributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type FilesContributedByProfileQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  profileId: Scalars['Float'];
}>;


export type FilesContributedByProfileQueryQuery = { __typename?: 'Query', filesContributedByProfile: number };

export type GetProfileByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetProfileByIdQueryQuery = { __typename?: 'Query', getProfileById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type GetProfileDataByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type GetProfileDataByIdQueryQuery = { __typename?: 'Query', getProfileDataById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type ProfilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  assigned?: InputMaybe<Scalars['Boolean']>;
}>;


export type ProfilesQueryQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> };

export type CountProfilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountProfilesQueryQuery = { __typename?: 'Query', countProfiles: number };

export type CountAuthorsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountAuthorsQueryQuery = { __typename?: 'Query', countAuthors: number };

export type GetAuthorsQueryQueryVariables = Exact<{
  profileId?: InputMaybe<Scalars['Float']>;
  runId: Scalars['String'];
}>;


export type GetAuthorsQueryQuery = { __typename?: 'Query', getAuthors: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null }> };

export type PrContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrContributionsPerQueryQuery = { __typename?: 'Query', PrContributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type AveragePrsTimeQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type AveragePrsTimeQueryQuery = { __typename?: 'Query', averagePrsTime: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type PrContributionsPerDayPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrContributionsPerDayPerQueryQuery = { __typename?: 'Query', PrContributionsPerDayPer: Array<{ __typename?: 'DateNameValue', id: number, name: string, date: string, value: number, color?: string | null }> };

export type CountPullRequestsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountPullRequestsQueryQuery = { __typename?: 'Query', countPullRequests: number };

export type PrReviewContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrReviewContributionsPerQueryQuery = { __typename?: 'Query', PrReviewContributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type AverageReviewTimeQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type AverageReviewTimeQueryQuery = { __typename?: 'Query', averageReviewTime: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type CountPrReviewsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountPrReviewsQueryQuery = { __typename?: 'Query', countPrReviews: number };

export type SearchQueryQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchQueryQuery = { __typename?: 'Query', search: Array<{ __typename?: 'SearchResult', id: number, runId: string, type: string, name: string, description: string, teamId?: number | null }> };

export type TeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsQueryQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profileIds?: Array<number> | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> | null }> };

export type GetTeamByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type GetTeamByIdQueryQuery = { __typename?: 'Query', getTeamById: { __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profileIds?: Array<number> | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> | null } };

export type CountTeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountTeamsQueryQuery = { __typename?: 'Query', countTeams: number };

export type GithubLoginUrlQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubLoginUrlQueryQuery = { __typename?: 'Query', githubLoginUrl: string };

export type GithubManageInstallationsUrlQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubManageInstallationsUrlQueryQuery = { __typename?: 'Query', githubManageInstallationsUrl: string };

export type GetAccessTokenQueryQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetAccessTokenQueryQuery = { __typename?: 'Query', getAccessToken: string };

export type GetInstallationsListQueryQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type GetInstallationsListQueryQuery = { __typename?: 'Query', getInstallationsList: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type GetReposListQueryQueryVariables = Exact<{
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
}>;


export type GetReposListQueryQuery = { __typename?: 'Query', getReposList: Array<{ __typename?: 'GithubRepo', name: string, url: string, branch?: string | null }> };

export type UpdateRunQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type UpdateRunQueryQuery = { __typename?: 'Query', updateRun: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type GetPortalLinkQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortalLinkQueryQuery = { __typename?: 'Query', getPortalLink: string };

export type SignupMutationMutationVariables = Exact<{
  SignupAccountInput: SignupAccountInput;
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', signup: { __typename?: 'userResponse', email: string } };

export type AddUsersToAccountMutationMutationVariables = Exact<{
  userEmail: Scalars['String'];
}>;


export type AddUsersToAccountMutationMutation = { __typename?: 'Mutation', addUsersToAccount: string };

export type RemoveUserFromAccountMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type RemoveUserFromAccountMutationMutation = { __typename?: 'Mutation', removeUserFromAccount: string };

export type AddAmidnMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type AddAmidnMutationMutation = { __typename?: 'Mutation', addAmidn: string };

export type RemoveAmidnMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type RemoveAmidnMutationMutation = { __typename?: 'Mutation', removeAmidn: string };

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'JwtToken', token: string } };

export type LogoutMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutationMutation = { __typename?: 'Mutation', logout: { __typename?: 'JwtToken', token: string } };

export type ForgetPasswordMutationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgetPasswordMutationMutation = { __typename?: 'Mutation', forgetPassword: { __typename?: 'ForgetPasswordResponse', message: string } };

export type ConfirmResetPasswordMutationMutationVariables = Exact<{
  ConfirmResetPasswordInput: ConfirmResetPasswordInput;
}>;


export type ConfirmResetPasswordMutationMutation = { __typename?: 'Mutation', confirmResetPassword: { __typename?: 'ConfirmResetPasswordResponse', message: string } };

export type ImportMutationMutationVariables = Exact<{
  files: FileUploadInput;
}>;


export type ImportMutationMutation = { __typename?: 'Mutation', import: { __typename?: 'CreateImportResponse', run: string } };

export type UpdateRunNameMutationMutationVariables = Exact<{
  uuid: Scalars['String'];
  runName: Scalars['String'];
}>;


export type UpdateRunNameMutationMutation = { __typename?: 'Mutation', updateRunName: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type CreateProfileMutationMutationVariables = Exact<{
  CreateProfileInput: CreateProfileInput;
}>;


export type CreateProfileMutationMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type CreateProfilesBasedOnSimilarityMutationMutationVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CreateProfilesBasedOnSimilarityMutationMutation = { __typename?: 'Mutation', createProfilesBasedOnSimilarity: string };

export type SetTeamIdForProfileWithNullMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type SetTeamIdForProfileWithNullMutationMutation = { __typename?: 'Mutation', setTeamIDForProfileWithNull: string };

export type MarkProfileAsExMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  exState: Scalars['Boolean'];
}>;


export type MarkProfileAsExMutationMutation = { __typename?: 'Mutation', markProfileAsEx: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type StoreProfilesMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  ProfilesAlignInput: ProfilesAlignInput;
}>;


export type StoreProfilesMutationMutation = { __typename?: 'Mutation', storeProfiles: string };

export type AssignAuthorToProfileMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  authorId: Scalars['Float'];
}>;


export type AssignAuthorToProfileMutationMutation = { __typename?: 'Mutation', assignAuthorToProfile: { __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null } };

export type UnassignAuthorToProfileMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  authorId: Scalars['Float'];
}>;


export type UnassignAuthorToProfileMutationMutation = { __typename?: 'Mutation', unassignAuthorToProfile: { __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null } };

export type DevelopersWithLowContributionMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  contribution: Scalars['Float'];
}>;


export type DevelopersWithLowContributionMutationMutation = { __typename?: 'Mutation', developersWithLowContribution: string };

export type DevelopersWorkingTogetherMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  teamsNumber: Scalars['Float'];
}>;


export type DevelopersWorkingTogetherMutationMutation = { __typename?: 'Mutation', developersWorkingTogether: string };

export type RemoveTeamMutationMutationVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type RemoveTeamMutationMutation = { __typename?: 'Mutation', removeTeam: string };

export type StoreTeamsMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  teams: Array<TeamInput> | TeamInput;
}>;


export type StoreTeamsMutationMutation = { __typename?: 'Mutation', storeTeams: string };

export type SelectARepoMutationMutationVariables = Exact<{
  accessToken: Scalars['String'];
  repo: GithubRepoInput;
  installationId: Scalars['Float'];
}>;


export type SelectARepoMutationMutation = { __typename?: 'Mutation', selectARepo: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type CloneRepoMutationMutationVariables = Exact<{
  repo: CloneRepo;
}>;


export type CloneRepoMutationMutation = { __typename?: 'Mutation', cloneRepo: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"depth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
export const FilesAndDirectoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesAndDirectories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"per"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"directoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"per"},"value":{"kind":"Variable","name":{"kind":"Name","value":"per"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<FilesAndDirectoriesQuery, FilesAndDirectoriesQueryVariables>;
export const ProfilesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]} as unknown as DocumentNode<ProfilesListQuery, ProfilesListQueryVariables>;
export const ProfilesListWithNameAndTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesListWithNameAndTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ProfilesListWithNameAndTitleQuery, ProfilesListWithNameAndTitleQueryVariables>;
export const ProfileByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profileById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileByIdQuery, ProfileByIdQueryVariables>;
export const TeamsListWithIdAndNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsListWithIdAndName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<TeamsListWithIdAndNameQuery, TeamsListWithIdAndNameQueryVariables>;
export const TeamsListWithProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsListWithProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]}}]} as unknown as DocumentNode<TeamsListWithProfilesQuery, TeamsListWithProfilesQueryVariables>;
export const DirectoriesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DirectoriesListQuery, DirectoriesListQueryVariables>;
export const DirectoryTeamContributionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoryTeamContributions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DirectoryTeamContributionsQuery, DirectoryTeamContributionsQueryVariables>;
export const MaxDepthInDirectoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"maxDepthInDirectory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}}]}}]} as unknown as DocumentNode<MaxDepthInDirectoryQuery, MaxDepthInDirectoryQueryVariables>;
export const MaxRootDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"maxRootDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}}]}}]} as unknown as DocumentNode<MaxRootDepthQuery, MaxRootDepthQueryVariables>;
export const DirectoriesListByDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesListByDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<DirectoriesListByDepthQuery, DirectoriesListByDepthQueryVariables>;
export const ContributionAtDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionAtDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contributionFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"depth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ContributionAtDepthQuery, ContributionAtDepthQueryVariables>;
export const GetTeamByIdWithNameAndProfilesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamByIdWithNameAndProfilesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeamById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamByIdWithNameAndProfilesListQuery, GetTeamByIdWithNameAndProfilesListQueryVariables>;
export const FeatureFlagsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featureFlagsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}}]}}]} as unknown as DocumentNode<FeatureFlagsQueryQuery, FeatureFlagsQueryQueryVariables>;
export const GetAccountDataQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccountDataQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccountData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]} as unknown as DocumentNode<GetAccountDataQueryQuery, GetAccountDataQueryQueryVariables>;
export const GetSubscriptionDetailsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSubscriptionDetailsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubscriptionDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"planName"}},{"kind":"Field","name":{"kind":"Name","value":"linesLimit"}},{"kind":"Field","name":{"kind":"Name","value":"authorsLimit"}},{"kind":"Field","name":{"kind":"Name","value":"usersLimit"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionDetailsQueryQuery, GetSubscriptionDetailsQueryQueryVariables>;
export const GetAccountUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccountUsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccountUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<GetAccountUsersQueryQuery, GetAccountUsersQueryQueryVariables>;
export const CheckIfUserIsOwnerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkIfUserIsOwnerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkIfUserIsOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<CheckIfUserIsOwnerQueryQuery, CheckIfUserIsOwnerQueryQueryVariables>;
export const WhoAmIQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"whoAmIQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<WhoAmIQueryQuery, WhoAmIQueryQueryVariables>;
export const CountAllAccountAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAllAccountAuthorsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAllAccountAuthors"}}]}}]} as unknown as DocumentNode<CountAllAccountAuthorsQueryQuery, CountAllAccountAuthorsQueryQueryVariables>;
export const DirectoryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}}]}}]} as unknown as DocumentNode<DirectoryQueryQuery, DirectoryQueryQueryVariables>;
export const DirectoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}}]}}]} as unknown as DocumentNode<DirectoriesQueryQuery, DirectoriesQueryQueryVariables>;
export const DirectoriesContributedByProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesContributedByProfileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directoriesContributedByProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}]} as unknown as DocumentNode<DirectoriesContributedByProfileQueryQuery, DirectoriesContributedByProfileQueryQueryVariables>;
export const ExEmployeesLinesPerCompanyTeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"exEmployeesLinesPerCompanyTeamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exEmployeesLinesPerCompanyTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ExEmployeesLinesPerCompanyTeamsQueryQuery, ExEmployeesLinesPerCompanyTeamsQueryQueryVariables>;
export const DepthNotesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"depthNotesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depthNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"directories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DepthNotesQueryQuery, DepthNotesQueryQueryVariables>;
export const RunsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"runsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<RunsQueryQuery, RunsQueryQueryVariables>;
export const RunQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"runQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"run"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<RunQueryQuery, RunQueryQueryVariables>;
export const FilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<FilesQueryQuery, FilesQueryQueryVariables>;
export const CountFilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countFilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountFilesQueryQuery, CountFilesQueryQueryVariables>;
export const CountDirectoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countDirectoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countDirectories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountDirectoriesQueryQuery, CountDirectoriesQueryQueryVariables>;
export const CountLinesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countLinesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countLines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountLinesQueryQuery, CountLinesQueryQueryVariables>;
export const CountAllAccountLinesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAllAccountLinesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAllAccountLines"}}]}}]} as unknown as DocumentNode<CountAllAccountLinesQueryQuery, CountAllAccountLinesQueryQueryVariables>;
export const ContributionsPerDayPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionsPerDayPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionsPerDayPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ContributionsPerDayPerQueryQuery, ContributionsPerDayPerQueryQueryVariables>;
export const ContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ContributionsPerQueryQuery, ContributionsPerQueryQueryVariables>;
export const FilesContributedByProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesContributedByProfileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filesContributedByProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}]} as unknown as DocumentNode<FilesContributedByProfileQueryQuery, FilesContributedByProfileQueryQueryVariables>;
export const GetProfileByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetProfileByIdQueryQuery, GetProfileByIdQueryQueryVariables>;
export const GetProfileDataByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileDataByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetProfileDataByIdQueryQuery, GetProfileDataByIdQueryQueryVariables>;
export const ProfilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assigned"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"assigned"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assigned"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<ProfilesQueryQuery, ProfilesQueryQueryVariables>;
export const CountProfilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countProfilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountProfilesQueryQuery, CountProfilesQueryQueryVariables>;
export const CountAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAuthorsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAuthors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountAuthorsQueryQuery, CountAuthorsQueryQueryVariables>;
export const GetAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthorsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetAuthorsQueryQuery, GetAuthorsQueryQueryVariables>;
export const PrContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrContributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrContributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrContributionsPerQueryQuery, PrContributionsPerQueryQueryVariables>;
export const AveragePrsTimeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"averagePrsTimeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averagePrsTime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<AveragePrsTimeQueryQuery, AveragePrsTimeQueryQueryVariables>;
export const PrContributionsPerDayPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrContributionsPerDayPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrContributionsPerDayPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrContributionsPerDayPerQueryQuery, PrContributionsPerDayPerQueryQueryVariables>;
export const CountPullRequestsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countPullRequestsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countPullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountPullRequestsQueryQuery, CountPullRequestsQueryQueryVariables>;
export const PrReviewContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrReviewContributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrReviewContributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrReviewContributionsPerQueryQuery, PrReviewContributionsPerQueryQueryVariables>;
export const AverageReviewTimeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"averageReviewTimeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageReviewTime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<AverageReviewTimeQueryQuery, AverageReviewTimeQueryQueryVariables>;
export const CountPrReviewsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countPrReviewsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countPrReviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountPrReviewsQueryQuery, CountPrReviewsQueryQueryVariables>;
export const SearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"runId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]} as unknown as DocumentNode<SearchQueryQuery, SearchQueryQueryVariables>;
export const TeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileIds"}}]}}]}}]} as unknown as DocumentNode<TeamsQueryQuery, TeamsQueryQueryVariables>;
export const GetTeamByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeamById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileIds"}}]}}]}}]} as unknown as DocumentNode<GetTeamByIdQueryQuery, GetTeamByIdQueryQueryVariables>;
export const CountTeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countTeamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountTeamsQueryQuery, CountTeamsQueryQueryVariables>;
export const GithubLoginUrlQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubLoginUrlQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubLoginUrl"}}]}}]} as unknown as DocumentNode<GithubLoginUrlQueryQuery, GithubLoginUrlQueryQueryVariables>;
export const GithubManageInstallationsUrlQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubManageInstallationsUrlQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubManageInstallationsUrl"}}]}}]} as unknown as DocumentNode<GithubManageInstallationsUrlQueryQuery, GithubManageInstallationsUrlQueryQueryVariables>;
export const GetAccessTokenQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccessTokenQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<GetAccessTokenQueryQuery, GetAccessTokenQueryQueryVariables>;
export const GetInstallationsListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInstallationsListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInstallationsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetInstallationsListQueryQuery, GetInstallationsListQueryQueryVariables>;
export const GetReposListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReposListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getReposList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"installationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}}]}}]}}]} as unknown as DocumentNode<GetReposListQueryQuery, GetReposListQueryQueryVariables>;
export const UpdateRunQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"updateRunQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<UpdateRunQueryQuery, UpdateRunQueryQueryVariables>;
export const GetPortalLinkQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPortalLinkQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPortalLink"}}]}}]} as unknown as DocumentNode<GetPortalLinkQueryQuery, GetPortalLinkQueryQueryVariables>;
export const SignupMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signupMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SignupAccountInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"SignupAccountInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SignupAccountInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignupMutationMutation, SignupMutationMutationVariables>;
export const AddUsersToAccountMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUsersToAccountMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUsersToAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}]}]}}]} as unknown as DocumentNode<AddUsersToAccountMutationMutation, AddUsersToAccountMutationMutationVariables>;
export const RemoveUserFromAccountMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUserFromAccountMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUserFromAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemoveUserFromAccountMutationMutation, RemoveUserFromAccountMutationMutationVariables>;
export const AddAmidnMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAmidnMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAmidn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<AddAmidnMutationMutation, AddAmidnMutationMutationVariables>;
export const RemoveAmidnMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAmidnMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAmidn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemoveAmidnMutationMutation, RemoveAmidnMutationMutationVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const LogoutMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LogoutMutationMutation, LogoutMutationMutationVariables>;
export const ForgetPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgetPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>;
export const ConfirmResetPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"confirmResetPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ConfirmResetPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ConfirmResetPasswordMutationMutation, ConfirmResetPasswordMutationMutationVariables>;
export const ImportMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"import"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"run"}}]}}]}}]} as unknown as DocumentNode<ImportMutationMutation, ImportMutationMutationVariables>;
export const UpdateRunNameMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRunNameMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRunName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"runName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<UpdateRunNameMutationMutation, UpdateRunNameMutationMutationVariables>;
export const CreateProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CreateProfileInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"CreateProfileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CreateProfileInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>;
export const CreateProfilesBasedOnSimilarityMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProfilesBasedOnSimilarityMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfilesBasedOnSimilarity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CreateProfilesBasedOnSimilarityMutationMutation, CreateProfilesBasedOnSimilarityMutationMutationVariables>;
export const SetTeamIdForProfileWithNullMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setTeamIDForProfileWithNullMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setTeamIDForProfileWithNull"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SetTeamIdForProfileWithNullMutationMutation, SetTeamIdForProfileWithNullMutationMutationVariables>;
export const MarkProfileAsExMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markProfileAsExMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exState"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markProfileAsEx"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"exState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<MarkProfileAsExMutationMutation, MarkProfileAsExMutationMutationVariables>;
export const StoreProfilesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"storeProfilesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ProfilesAlignInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfilesAlignInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ProfilesAlignInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ProfilesAlignInput"}}}]}]}}]} as unknown as DocumentNode<StoreProfilesMutationMutation, StoreProfilesMutationMutationVariables>;
export const AssignAuthorToProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"assignAuthorToProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignAuthorToProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<AssignAuthorToProfileMutationMutation, AssignAuthorToProfileMutationMutationVariables>;
export const UnassignAuthorToProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unassignAuthorToProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unassignAuthorToProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<UnassignAuthorToProfileMutationMutation, UnassignAuthorToProfileMutationMutationVariables>;
export const DevelopersWithLowContributionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"developersWithLowContributionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contribution"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"developersWithLowContribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contribution"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contribution"}}}]}]}}]} as unknown as DocumentNode<DevelopersWithLowContributionMutationMutation, DevelopersWithLowContributionMutationMutationVariables>;
export const DevelopersWorkingTogetherMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"developersWorkingTogetherMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamsNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"developersWorkingTogether"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamsNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamsNumber"}}}]}]}}]} as unknown as DocumentNode<DevelopersWorkingTogetherMutationMutation, DevelopersWorkingTogetherMutationMutationVariables>;
export const RemoveTeamMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeTeamMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<RemoveTeamMutationMutation, RemoveTeamMutationMutationVariables>;
export const StoreTeamsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"storeTeamsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teams"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"teams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teams"}}}]}]}}]} as unknown as DocumentNode<StoreTeamsMutationMutation, StoreTeamsMutationMutationVariables>;
export const SelectARepoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"selectARepoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GithubRepoInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectARepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}},{"kind":"Argument","name":{"kind":"Name","value":"installationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<SelectARepoMutationMutation, SelectARepoMutationMutationVariables>;
export const CloneRepoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cloneRepoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CloneRepo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloneRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<CloneRepoMutationMutation, CloneRepoMutationMutationVariables>;
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  companyName: Scalars['String'];
  id: Scalars['Float'];
  ownerId: Scalars['Float'];
};

export type AccountPackage = {
  __typename?: 'AccountPackage';
  authorsLimit: Scalars['Float'];
  customerId?: Maybe<Scalars['String']>;
  expirationDate: Scalars['Timestamp'];
  id: Scalars['Float'];
  linesLimit: Scalars['Float'];
  planName: Scalars['String'];
  usersLimit: Scalars['Float'];
};

export type Author = {
  __typename?: 'Author';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastChange: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  profileId?: Maybe<Scalars['Float']>;
};

export type AuthorInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileInput>;
  profileId?: InputMaybe<Scalars['Float']>;
};

export type CloneRepo = {
  link: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ConfirmResetPasswordInput = {
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ConfirmResetPasswordResponse = {
  __typename?: 'ConfirmResetPasswordResponse';
  /** Confirm Password Message Response */
  message: Scalars['String'];
};

export type ContributionFilter = {
  depth?: InputMaybe<Scalars['Float']>;
  directoryId?: InputMaybe<Scalars['Float']>;
  fileId?: InputMaybe<Scalars['Float']>;
  from?: InputMaybe<Scalars['Float']>;
  group?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  per?: InputMaybe<Scalars['String']>;
  profileId?: InputMaybe<Scalars['Float']>;
  recursive?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type CreateImportResponse = {
  __typename?: 'CreateImportResponse';
  run: Scalars['String'];
};

export type CreateProfileInput = {
  /** The id of the first author to assign */
  authorId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  /** The id of the current run */
  runId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type DateNameValue = {
  __typename?: 'DateNameValue';
  color?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type DepthDirectoryInput = {
  __typename?: 'DepthDirectoryInput';
  id: Scalars['Float'];
  name: Scalars['String'];
  team?: Maybe<DepthTeamInput>;
  value: Scalars['Float'];
};

export type DepthNotesDto = {
  __typename?: 'DepthNotesDto';
  depth: Scalars['Float'];
  directories?: Maybe<Array<DepthDirectoryInput>>;
};

export type DepthProfileInput = {
  __typename?: 'DepthProfileInput';
  color: Scalars['String'];
  ex: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type DepthTeamInput = {
  __typename?: 'DepthTeamInput';
  color: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  profile?: Maybe<DepthProfileInput>;
  value: Scalars['Float'];
};

export type Directory = {
  __typename?: 'Directory';
  children?: Maybe<Array<Directory>>;
  contribution: Array<NameValue>;
  countFilesOfDirectory: Scalars['Float'];
  depth: Scalars['Float'];
  exContributions: Array<NameValue>;
  files: Array<File>;
  id?: Maybe<Scalars['Float']>;
  left?: Maybe<Directory>;
  lines: Scalars['Float'];
  maxDepth: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Directory>;
  parentId?: Maybe<Scalars['Float']>;
  path?: Maybe<Scalars['String']>;
  profilesContributions: Array<NameValue>;
  right?: Maybe<Directory>;
  teamsContribution: Array<NameValue>;
};


export type DirectoryContributionArgs = {
  filter: ContributionFilter;
};


export type DirectoryLinesArgs = {
  filter: ContributionFilter;
};

export type DirectoryFilter = {
  depth?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['Float']>;
  path?: InputMaybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  contribution: Array<NameValue>;
  exContributions: Array<NameValue>;
  ext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  profilesContributions: Array<NameValue>;
  teamsContribution: Array<NameValue>;
};


export type FileContributionArgs = {
  filter?: InputMaybe<ContributionFilter>;
};

export type FileFilter = {
  directoryId?: InputMaybe<Scalars['Float']>;
};

export type FileUploadInput = {
  file: Scalars['Upload'];
};

export type ForgetPasswordResponse = {
  __typename?: 'ForgetPasswordResponse';
  /** Forget Password Message Response */
  message: Scalars['String'];
};

export type GithubRepo = {
  __typename?: 'GithubRepo';
  branch?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type GithubRepoInput = {
  branch?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type JwtToken = {
  __typename?: 'JwtToken';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAmidn: Scalars['String'];
  addUsersToAccount: Scalars['String'];
  assignAuthorToProfile: Author;
  cloneRepo: Run;
  confirmResetPassword: ConfirmResetPasswordResponse;
  createProfile: Profile;
  createProfilesBasedOnSimilarity: Scalars['String'];
  developersWithLowContribution: Scalars['String'];
  developersWorkingTogether: Scalars['String'];
  forgetPassword: ForgetPasswordResponse;
  import: CreateImportResponse;
  login: JwtToken;
  logout: JwtToken;
  markProfileAsEx: Profile;
  removeAmidn: Scalars['String'];
  removeTeam: Scalars['String'];
  removeUserFromAccount: Scalars['String'];
  selectARepo: Run;
  setTeamIDForProfileWithNull: Scalars['String'];
  signup: UserResponse;
  storeProfiles: Scalars['String'];
  storeTeams: Scalars['String'];
  unassignAuthorToProfile: Author;
  updateRunName: Run;
};


export type MutationAddAmidnArgs = {
  userId: Scalars['Float'];
};


export type MutationAddUsersToAccountArgs = {
  userEmail: Scalars['String'];
};


export type MutationAssignAuthorToProfileArgs = {
  authorId: Scalars['Float'];
  profileId: Scalars['Float'];
};


export type MutationCloneRepoArgs = {
  repo: CloneRepo;
};


export type MutationConfirmResetPasswordArgs = {
  ConfirmResetPasswordInput: ConfirmResetPasswordInput;
};


export type MutationCreateProfileArgs = {
  CreateProfileInput: CreateProfileInput;
};


export type MutationCreateProfilesBasedOnSimilarityArgs = {
  runId: Scalars['String'];
};


export type MutationDevelopersWithLowContributionArgs = {
  contribution: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationDevelopersWorkingTogetherArgs = {
  runId: Scalars['String'];
  teamsNumber: Scalars['Float'];
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationImportArgs = {
  files: FileUploadInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMarkProfileAsExArgs = {
  exState: Scalars['Boolean'];
  profileId: Scalars['Float'];
};


export type MutationRemoveAmidnArgs = {
  userId: Scalars['Float'];
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationRemoveUserFromAccountArgs = {
  userId: Scalars['Float'];
};


export type MutationSelectARepoArgs = {
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
  repo: GithubRepoInput;
};


export type MutationSetTeamIdForProfileWithNullArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type MutationSignupArgs = {
  SignupAccountInput: SignupAccountInput;
};


export type MutationStoreProfilesArgs = {
  ProfilesAlignInput: ProfilesAlignInput;
  runId: Scalars['String'];
};


export type MutationStoreTeamsArgs = {
  runId: Scalars['String'];
  teams: Array<TeamInput>;
};


export type MutationUnassignAuthorToProfileArgs = {
  authorId: Scalars['Float'];
  profileId: Scalars['Float'];
};


export type MutationUpdateRunNameArgs = {
  runName: Scalars['String'];
  uuid: Scalars['String'];
};

export type NameValue = {
  __typename?: 'NameValue';
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type NameValueInput = {
  color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type Profile = {
  __typename?: 'Profile';
  authorIds?: Maybe<Array<Scalars['Float']>>;
  authors?: Maybe<Array<Author>>;
  color?: Maybe<Scalars['String']>;
  ex?: Maybe<Scalars['Boolean']>;
  generated?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Float']>;
  lastChange?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type ProfileAlignInput = {
  /** array of assigned authors to profile */
  authors?: InputMaybe<Array<Scalars['Float']>>;
  color?: InputMaybe<Scalars['String']>;
  /** is ex employee or not */
  ex: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProfileInput = {
  authorIds?: InputMaybe<Array<Scalars['Float']>>;
  authors?: InputMaybe<Array<AuthorInput>>;
  color?: InputMaybe<Scalars['String']>;
  ex?: InputMaybe<Scalars['Boolean']>;
  generated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProfilesAlignInput = {
  profiles: Array<ProfileAlignInput>;
};

export type Query = {
  __typename?: 'Query';
  PrContributionsPer: Array<NameValue>;
  PrContributionsPerDayPer: Array<DateNameValue>;
  PrReviewContributionsPer: Array<NameValue>;
  averagePrsTime: Array<NameValue>;
  averageReviewTime: Array<NameValue>;
  checkIfUserIsOwner: Scalars['Boolean'];
  contributionsPer: Array<NameValue>;
  contributionsPerDayPer: Array<DateNameValue>;
  countAllAccountAuthors: Scalars['Float'];
  countAllAccountLines: Scalars['Float'];
  countAuthors: Scalars['Float'];
  countDirectories: Scalars['Float'];
  countFiles: Scalars['Float'];
  countLines: Scalars['Float'];
  countPrReviews: Scalars['Float'];
  countProfiles: Scalars['Float'];
  countPullRequests: Scalars['Float'];
  countTeams: Scalars['Float'];
  depthNotes: Array<DepthNotesDto>;
  directories: Array<Directory>;
  directoriesContributedByProfile: Scalars['Float'];
  directory: Directory;
  exEmployeesLinesPerCompanyTeams: Array<NameValue>;
  featureFlags: Array<Scalars['String']>;
  files: Array<File>;
  filesContributedByProfile: Scalars['Float'];
  getAccessToken: Scalars['String'];
  getAccountData: Account;
  getAccountUsers: Array<User>;
  getAuthors: Array<Author>;
  getInstallationsList: Array<NameValue>;
  getPortalLink: Scalars['String'];
  getProfileById: Profile;
  getProfileDataById: Profile;
  getReposList: Array<GithubRepo>;
  getSubscriptionDetails: AccountPackage;
  getTeamById: Team;
  githubLoginUrl: Scalars['String'];
  githubManageInstallationsUrl: Scalars['String'];
  profiles: Array<Profile>;
  run: Run;
  runs: Array<Run>;
  search: Array<SearchResult>;
  teams: Array<Team>;
  updateRun: Run;
  whoAmI: User;
};


export type QueryPrContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryPrContributionsPerDayPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryPrReviewContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryAveragePrsTimeArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryAverageReviewTimeArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryCheckIfUserIsOwnerArgs = {
  email: Scalars['String'];
};


export type QueryContributionsPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryContributionsPerDayPerArgs = {
  query?: InputMaybe<ContributionFilter>;
  runId: Scalars['String'];
};


export type QueryCountAuthorsArgs = {
  runId: Scalars['String'];
};


export type QueryCountDirectoriesArgs = {
  runId: Scalars['String'];
};


export type QueryCountFilesArgs = {
  runId: Scalars['String'];
};


export type QueryCountLinesArgs = {
  runId: Scalars['String'];
};


export type QueryCountPrReviewsArgs = {
  runId: Scalars['String'];
};


export type QueryCountProfilesArgs = {
  runId: Scalars['String'];
};


export type QueryCountPullRequestsArgs = {
  runId: Scalars['String'];
};


export type QueryCountTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryDepthNotesArgs = {
  runId: Scalars['String'];
};


export type QueryDirectoriesArgs = {
  filter: DirectoryFilter;
  runId: Scalars['String'];
};


export type QueryDirectoriesContributedByProfileArgs = {
  profileId: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryDirectoryArgs = {
  filter: DirectoryFilter;
  runId: Scalars['String'];
};


export type QueryExEmployeesLinesPerCompanyTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryFilesArgs = {
  filter: FileFilter;
  runId: Scalars['String'];
};


export type QueryFilesContributedByProfileArgs = {
  profileId: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryGetAccessTokenArgs = {
  code: Scalars['String'];
};


export type QueryGetAuthorsArgs = {
  profileId?: InputMaybe<Scalars['Float']>;
  runId: Scalars['String'];
};


export type QueryGetInstallationsListArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetProfileDataByIdArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryGetReposListArgs = {
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
};


export type QueryGetTeamByIdArgs = {
  id: Scalars['Float'];
  runId: Scalars['String'];
};


export type QueryProfilesArgs = {
  assigned?: InputMaybe<Scalars['Boolean']>;
  runId: Scalars['String'];
};


export type QueryRunArgs = {
  runId: Scalars['String'];
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};


export type QueryTeamsArgs = {
  runId: Scalars['String'];
};


export type QueryUpdateRunArgs = {
  runId: Scalars['String'];
};

export type Run = {
  __typename?: 'Run';
  beingHandled: Scalars['Boolean'];
  commitId?: Maybe<Scalars['String']>;
  countProfiles: Scalars['Float'];
  countTeams: Scalars['Float'];
  date?: Maybe<Scalars['Timestamp']>;
  extractedFiles: Scalars['Float'];
  installationId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prBeingHandled: Scalars['Boolean'];
  repoId?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  totalFiles: Scalars['Float'];
  uuid: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  description: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  runId: Scalars['String'];
  teamId?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type SignupAccountInput = {
  companyName?: InputMaybe<Scalars['String']>;
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  profileIds?: Maybe<Array<Scalars['Float']>>;
  profiles?: Maybe<Array<Profile>>;
};

export type TeamInput = {
  color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  profileIds?: InputMaybe<Array<Scalars['Float']>>;
  profiles?: InputMaybe<Array<ProfileInput>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  isAdmin: Scalars['Boolean'];
  profilePicture?: Maybe<Scalars['String']>;
};

export type DirectoryInput = {
  children?: InputMaybe<Array<DirectoryInput>>;
  id?: InputMaybe<Scalars['Float']>;
  left?: InputMaybe<DirectoryInput>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<DirectoryInput>;
  parentId?: InputMaybe<Scalars['Float']>;
  path?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<DirectoryInput>;
};

export type FileInput = {
  ext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'userResponse';
  email: Scalars['String'];
};

export type TestQueryVariables = Exact<{
  depth: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type TestQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', path?: string | null }> };

export type FilesAndDirectoriesQueryVariables = Exact<{
  runId: Scalars['String'];
  directoryId?: InputMaybe<Scalars['Float']>;
  per?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Float']>;
}>;


export type FilesAndDirectoriesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null }>, directories: Array<{ __typename?: 'Directory', id?: number | null, name?: string | null, path?: string | null, countFilesOfDirectory: number, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type ProfilesListQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ProfilesListQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, teamId?: number | null }> };

export type ProfilesListWithNameAndTitleQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ProfilesListWithNameAndTitleQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null }> };

export type ProfileByIdQueryVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type ProfileByIdQuery = { __typename?: 'Query', getProfileDataById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, teamId?: number | null, color?: string | null, authors?: Array<{ __typename?: 'Author', id?: number | null }> | null } };

export type TeamsListWithIdAndNameQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsListWithIdAndNameQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null }> };

export type TeamsListWithProfilesQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsListWithProfilesQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, ex?: boolean | null, teamId?: number | null }> | null }> };

export type DirectoriesListQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
}>;


export type DirectoriesListQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, name?: string | null }> };

export type DirectoryTeamContributionsQueryVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type DirectoryTeamContributionsQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', id?: number | null, teamsContribution: Array<{ __typename?: 'NameValue', name?: string | null, value: number }> } };

export type MaxDepthInDirectoryQueryVariables = Exact<{
  runId: Scalars['String'];
  directoryId: Scalars['Float'];
}>;


export type MaxDepthInDirectoryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', maxDepth: number } };

export type MaxRootDepthQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type MaxRootDepthQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', maxDepth: number } };

export type DirectoriesListByDepthQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
}>;


export type DirectoriesListByDepthQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', path?: string | null }> };

export type ContributionAtDepthQueryVariables = Exact<{
  runId: Scalars['String'];
  depth: Scalars['Float'];
  contributionFilter: ContributionFilter;
}>;


export type ContributionAtDepthQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, path?: string | null, name?: string | null, contribution: Array<{ __typename?: 'NameValue', name?: string | null, value: number }> }> };

export type GetTeamByIdWithNameAndProfilesListQueryVariables = Exact<{
  runId: Scalars['String'];
  teamId: Scalars['Float'];
}>;


export type GetTeamByIdWithNameAndProfilesListQuery = { __typename?: 'Query', getTeamById: { __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null }> | null } };

export type FeatureFlagsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeatureFlagsQueryQuery = { __typename?: 'Query', featureFlags: Array<string> };

export type GetAccountDataQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountDataQueryQuery = { __typename?: 'Query', getAccountData: { __typename?: 'Account', id: number, companyName: string, ownerId: number } };

export type GetSubscriptionDetailsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionDetailsQueryQuery = { __typename?: 'Query', getSubscriptionDetails: { __typename?: 'AccountPackage', id: number, customerId?: string | null, planName: string, linesLimit: number, authorsLimit: number, usersLimit: number, expirationDate: any } };

export type GetAccountUsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountUsersQueryQuery = { __typename?: 'Query', getAccountUsers: Array<{ __typename?: 'User', id: number, email: string, profilePicture?: string | null, isAdmin: boolean }> };

export type CheckIfUserIsOwnerQueryQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckIfUserIsOwnerQueryQuery = { __typename?: 'Query', checkIfUserIsOwner: boolean };

export type WhoAmIQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQueryQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: number, email: string, profilePicture?: string | null, isAdmin: boolean } };

export type CountAllAccountAuthorsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CountAllAccountAuthorsQueryQuery = { __typename?: 'Query', countAllAccountAuthors: number };

export type DirectoryQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
  directory_parent_parent_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_parent_parent_lines_filter: ContributionFilter;
  directory_parent_parent_contribution_filter: ContributionFilter;
  directory_right_right_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_right_right_lines_filter: ContributionFilter;
  directory_right_right_contribution_filter: ContributionFilter;
  directory_left_left_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_left_left_lines_filter: ContributionFilter;
  directory_left_left_contribution_filter: ContributionFilter;
  directory_children_children_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_children_children_lines_filter: ContributionFilter;
  directory_children_children_contribution_filter: ContributionFilter;
  directory_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directory_lines_filter: ContributionFilter;
  directory_contribution_filter: ContributionFilter;
}>;


export type DirectoryQueryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, parent?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, right?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, left?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, children?: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> | null, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } };

export type DirectoriesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: DirectoryFilter;
  directories_parent_parent_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_parent_parent_lines_filter: ContributionFilter;
  directories_parent_parent_contribution_filter: ContributionFilter;
  directories_right_right_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_right_right_lines_filter: ContributionFilter;
  directories_right_right_contribution_filter: ContributionFilter;
  directories_left_left_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_left_left_lines_filter: ContributionFilter;
  directories_left_left_contribution_filter: ContributionFilter;
  directories_children_children_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_children_children_lines_filter: ContributionFilter;
  directories_children_children_contribution_filter: ContributionFilter;
  directories_files_files_contribution_filter?: InputMaybe<ContributionFilter>;
  directories_lines_filter: ContributionFilter;
  directories_contribution_filter: ContributionFilter;
}>;


export type DirectoriesQueryQuery = { __typename?: 'Query', directories: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, parent?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, right?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, left?: { __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> } | null, children?: Array<{ __typename?: 'Directory', id?: number | null, parentId?: number | null, name?: string | null, path?: string | null, depth: number, maxDepth: number, lines: number, countFilesOfDirectory: number, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> | null, files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }>, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type DirectoriesContributedByProfileQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  profileId: Scalars['Float'];
}>;


export type DirectoriesContributedByProfileQueryQuery = { __typename?: 'Query', directoriesContributedByProfile: number };

export type ExEmployeesLinesPerCompanyTeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type ExEmployeesLinesPerCompanyTeamsQueryQuery = { __typename?: 'Query', exEmployeesLinesPerCompanyTeams: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type DepthNotesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type DepthNotesQueryQuery = { __typename?: 'Query', depthNotes: Array<{ __typename?: 'DepthNotesDto', depth: number, directories?: Array<{ __typename?: 'DepthDirectoryInput', id: number, name: string, value: number, team?: { __typename?: 'DepthTeamInput', id: number, name: string, value: number, color: string, profile?: { __typename?: 'DepthProfileInput', id: number, name: string, value: number, color: string, ex: boolean } | null } | null }> | null }> };

export type RunsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type RunsQueryQuery = { __typename?: 'Query', runs: Array<{ __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number }> };

export type RunQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type RunQueryQuery = { __typename?: 'Query', run: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type FilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  filter: FileFilter;
  files_contribution_filter?: InputMaybe<ContributionFilter>;
}>;


export type FilesQueryQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id?: number | null, name?: string | null, path?: string | null, ext?: string | null, contribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, teamsContribution: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, profilesContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }>, exContributions: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> }> };

export type CountFilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountFilesQueryQuery = { __typename?: 'Query', countFiles: number };

export type CountDirectoriesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountDirectoriesQueryQuery = { __typename?: 'Query', countDirectories: number };

export type CountLinesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountLinesQueryQuery = { __typename?: 'Query', countLines: number };

export type CountAllAccountLinesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CountAllAccountLinesQueryQuery = { __typename?: 'Query', countAllAccountLines: number };

export type ContributionsPerDayPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type ContributionsPerDayPerQueryQuery = { __typename?: 'Query', contributionsPerDayPer: Array<{ __typename?: 'DateNameValue', id: number, name: string, date: string, value: number, color?: string | null }> };

export type ContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type ContributionsPerQueryQuery = { __typename?: 'Query', contributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type FilesContributedByProfileQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  profileId: Scalars['Float'];
}>;


export type FilesContributedByProfileQueryQuery = { __typename?: 'Query', filesContributedByProfile: number };

export type GetProfileByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetProfileByIdQueryQuery = { __typename?: 'Query', getProfileById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type GetProfileDataByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type GetProfileDataByIdQueryQuery = { __typename?: 'Query', getProfileDataById: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type ProfilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  assigned?: InputMaybe<Scalars['Boolean']>;
}>;


export type ProfilesQueryQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> };

export type CountProfilesQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountProfilesQueryQuery = { __typename?: 'Query', countProfiles: number };

export type CountAuthorsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountAuthorsQueryQuery = { __typename?: 'Query', countAuthors: number };

export type GetAuthorsQueryQueryVariables = Exact<{
  profileId?: InputMaybe<Scalars['Float']>;
  runId: Scalars['String'];
}>;


export type GetAuthorsQueryQuery = { __typename?: 'Query', getAuthors: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null }> };

export type PrContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrContributionsPerQueryQuery = { __typename?: 'Query', PrContributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type AveragePrsTimeQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type AveragePrsTimeQueryQuery = { __typename?: 'Query', averagePrsTime: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type PrContributionsPerDayPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrContributionsPerDayPerQueryQuery = { __typename?: 'Query', PrContributionsPerDayPer: Array<{ __typename?: 'DateNameValue', id: number, name: string, date: string, value: number, color?: string | null }> };

export type CountPullRequestsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountPullRequestsQueryQuery = { __typename?: 'Query', countPullRequests: number };

export type PrReviewContributionsPerQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type PrReviewContributionsPerQueryQuery = { __typename?: 'Query', PrReviewContributionsPer: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type AverageReviewTimeQueryQueryVariables = Exact<{
  runId: Scalars['String'];
  query?: InputMaybe<ContributionFilter>;
}>;


export type AverageReviewTimeQueryQuery = { __typename?: 'Query', averageReviewTime: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type CountPrReviewsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountPrReviewsQueryQuery = { __typename?: 'Query', countPrReviews: number };

export type SearchQueryQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchQueryQuery = { __typename?: 'Query', search: Array<{ __typename?: 'SearchResult', id: number, runId: string, type: string, name: string, description: string, teamId?: number | null }> };

export type TeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type TeamsQueryQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profileIds?: Array<number> | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> | null }> };

export type GetTeamByIdQueryQueryVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type GetTeamByIdQueryQuery = { __typename?: 'Query', getTeamById: { __typename?: 'Team', id?: number | null, name?: string | null, color?: string | null, profileIds?: Array<number> | null, profiles?: Array<{ __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null }> | null } };

export type CountTeamsQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CountTeamsQueryQuery = { __typename?: 'Query', countTeams: number };

export type GithubLoginUrlQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubLoginUrlQueryQuery = { __typename?: 'Query', githubLoginUrl: string };

export type GithubManageInstallationsUrlQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubManageInstallationsUrlQueryQuery = { __typename?: 'Query', githubManageInstallationsUrl: string };

export type GetAccessTokenQueryQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetAccessTokenQueryQuery = { __typename?: 'Query', getAccessToken: string };

export type GetInstallationsListQueryQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type GetInstallationsListQueryQuery = { __typename?: 'Query', getInstallationsList: Array<{ __typename?: 'NameValue', id?: number | null, name?: string | null, value: number, color?: string | null }> };

export type GetReposListQueryQueryVariables = Exact<{
  accessToken: Scalars['String'];
  installationId: Scalars['Float'];
}>;


export type GetReposListQueryQuery = { __typename?: 'Query', getReposList: Array<{ __typename?: 'GithubRepo', name: string, url: string, branch?: string | null }> };

export type UpdateRunQueryQueryVariables = Exact<{
  runId: Scalars['String'];
}>;


export type UpdateRunQueryQuery = { __typename?: 'Query', updateRun: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type GetPortalLinkQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortalLinkQueryQuery = { __typename?: 'Query', getPortalLink: string };

export type SignupMutationMutationVariables = Exact<{
  SignupAccountInput: SignupAccountInput;
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', signup: { __typename?: 'userResponse', email: string } };

export type AddUsersToAccountMutationMutationVariables = Exact<{
  userEmail: Scalars['String'];
}>;


export type AddUsersToAccountMutationMutation = { __typename?: 'Mutation', addUsersToAccount: string };

export type RemoveUserFromAccountMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type RemoveUserFromAccountMutationMutation = { __typename?: 'Mutation', removeUserFromAccount: string };

export type AddAmidnMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type AddAmidnMutationMutation = { __typename?: 'Mutation', addAmidn: string };

export type RemoveAmidnMutationMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type RemoveAmidnMutationMutation = { __typename?: 'Mutation', removeAmidn: string };

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'JwtToken', token: string } };

export type LogoutMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutationMutation = { __typename?: 'Mutation', logout: { __typename?: 'JwtToken', token: string } };

export type ForgetPasswordMutationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgetPasswordMutationMutation = { __typename?: 'Mutation', forgetPassword: { __typename?: 'ForgetPasswordResponse', message: string } };

export type ConfirmResetPasswordMutationMutationVariables = Exact<{
  ConfirmResetPasswordInput: ConfirmResetPasswordInput;
}>;


export type ConfirmResetPasswordMutationMutation = { __typename?: 'Mutation', confirmResetPassword: { __typename?: 'ConfirmResetPasswordResponse', message: string } };

export type ImportMutationMutationVariables = Exact<{
  files: FileUploadInput;
}>;


export type ImportMutationMutation = { __typename?: 'Mutation', import: { __typename?: 'CreateImportResponse', run: string } };

export type UpdateRunNameMutationMutationVariables = Exact<{
  uuid: Scalars['String'];
  runName: Scalars['String'];
}>;


export type UpdateRunNameMutationMutation = { __typename?: 'Mutation', updateRunName: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type CreateProfileMutationMutationVariables = Exact<{
  CreateProfileInput: CreateProfileInput;
}>;


export type CreateProfileMutationMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type CreateProfilesBasedOnSimilarityMutationMutationVariables = Exact<{
  runId: Scalars['String'];
}>;


export type CreateProfilesBasedOnSimilarityMutationMutation = { __typename?: 'Mutation', createProfilesBasedOnSimilarity: string };

export type SetTeamIdForProfileWithNullMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  id: Scalars['Float'];
}>;


export type SetTeamIdForProfileWithNullMutationMutation = { __typename?: 'Mutation', setTeamIDForProfileWithNull: string };

export type MarkProfileAsExMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  exState: Scalars['Boolean'];
}>;


export type MarkProfileAsExMutationMutation = { __typename?: 'Mutation', markProfileAsEx: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null, authors?: Array<{ __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number }> | null } };

export type StoreProfilesMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  ProfilesAlignInput: ProfilesAlignInput;
}>;


export type StoreProfilesMutationMutation = { __typename?: 'Mutation', storeProfiles: string };

export type AssignAuthorToProfileMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  authorId: Scalars['Float'];
}>;


export type AssignAuthorToProfileMutationMutation = { __typename?: 'Mutation', assignAuthorToProfile: { __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null } };

export type UnassignAuthorToProfileMutationMutationVariables = Exact<{
  profileId: Scalars['Float'];
  authorId: Scalars['Float'];
}>;


export type UnassignAuthorToProfileMutationMutation = { __typename?: 'Mutation', unassignAuthorToProfile: { __typename?: 'Author', id?: number | null, name?: string | null, email?: string | null, profileId?: number | null, lastChange: number, profile?: { __typename?: 'Profile', id?: number | null, name?: string | null, title?: string | null, color?: string | null, ex?: boolean | null, generated?: boolean | null, authorIds?: Array<number> | null, teamId?: number | null, lastChange?: number | null } | null } };

export type DevelopersWithLowContributionMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  contribution: Scalars['Float'];
}>;


export type DevelopersWithLowContributionMutationMutation = { __typename?: 'Mutation', developersWithLowContribution: string };

export type DevelopersWorkingTogetherMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  teamsNumber: Scalars['Float'];
}>;


export type DevelopersWorkingTogetherMutationMutation = { __typename?: 'Mutation', developersWorkingTogether: string };

export type RemoveTeamMutationMutationVariables = Exact<{
  id: Scalars['Float'];
  runId: Scalars['String'];
}>;


export type RemoveTeamMutationMutation = { __typename?: 'Mutation', removeTeam: string };

export type StoreTeamsMutationMutationVariables = Exact<{
  runId: Scalars['String'];
  teams: Array<TeamInput> | TeamInput;
}>;


export type StoreTeamsMutationMutation = { __typename?: 'Mutation', storeTeams: string };

export type SelectARepoMutationMutationVariables = Exact<{
  accessToken: Scalars['String'];
  repo: GithubRepoInput;
  installationId: Scalars['Float'];
}>;


export type SelectARepoMutationMutation = { __typename?: 'Mutation', selectARepo: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };

export type CloneRepoMutationMutationVariables = Exact<{
  repo: CloneRepo;
}>;


export type CloneRepoMutationMutation = { __typename?: 'Mutation', cloneRepo: { __typename?: 'Run', uuid: string, name?: string | null, commitId?: string | null, installationId?: number | null, repoId?: number | null, date?: any | null, status: string, beingHandled: boolean, prBeingHandled: boolean, totalFiles: number, extractedFiles: number, countProfiles: number, countTeams: number } };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"depth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
export const FilesAndDirectoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesAndDirectories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"per"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"directoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"per"},"value":{"kind":"Variable","name":{"kind":"Name","value":"per"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<FilesAndDirectoriesQuery, FilesAndDirectoriesQueryVariables>;
export const ProfilesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]} as unknown as DocumentNode<ProfilesListQuery, ProfilesListQueryVariables>;
export const ProfilesListWithNameAndTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesListWithNameAndTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ProfilesListWithNameAndTitleQuery, ProfilesListWithNameAndTitleQueryVariables>;
export const ProfileByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profileById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileByIdQuery, ProfileByIdQueryVariables>;
export const TeamsListWithIdAndNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsListWithIdAndName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<TeamsListWithIdAndNameQuery, TeamsListWithIdAndNameQueryVariables>;
export const TeamsListWithProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsListWithProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]}}]} as unknown as DocumentNode<TeamsListWithProfilesQuery, TeamsListWithProfilesQueryVariables>;
export const DirectoriesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DirectoriesListQuery, DirectoriesListQueryVariables>;
export const DirectoryTeamContributionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoryTeamContributions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DirectoryTeamContributionsQuery, DirectoryTeamContributionsQueryVariables>;
export const MaxDepthInDirectoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"maxDepthInDirectory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}}]}}]} as unknown as DocumentNode<MaxDepthInDirectoryQuery, MaxDepthInDirectoryQueryVariables>;
export const MaxRootDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"maxRootDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}}]}}]} as unknown as DocumentNode<MaxRootDepthQuery, MaxRootDepthQueryVariables>;
export const DirectoriesListByDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesListByDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<DirectoriesListByDepthQuery, DirectoriesListByDepthQueryVariables>;
export const ContributionAtDepthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionAtDepth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contributionFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"depth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depth"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ContributionAtDepthQuery, ContributionAtDepthQueryVariables>;
export const GetTeamByIdWithNameAndProfilesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamByIdWithNameAndProfilesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeamById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamByIdWithNameAndProfilesListQuery, GetTeamByIdWithNameAndProfilesListQueryVariables>;
export const FeatureFlagsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featureFlagsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featureFlags"}}]}}]} as unknown as DocumentNode<FeatureFlagsQueryQuery, FeatureFlagsQueryQueryVariables>;
export const GetAccountDataQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccountDataQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccountData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]} as unknown as DocumentNode<GetAccountDataQueryQuery, GetAccountDataQueryQueryVariables>;
export const GetSubscriptionDetailsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSubscriptionDetailsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubscriptionDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"planName"}},{"kind":"Field","name":{"kind":"Name","value":"linesLimit"}},{"kind":"Field","name":{"kind":"Name","value":"authorsLimit"}},{"kind":"Field","name":{"kind":"Name","value":"usersLimit"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionDetailsQueryQuery, GetSubscriptionDetailsQueryQueryVariables>;
export const GetAccountUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccountUsersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccountUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<GetAccountUsersQueryQuery, GetAccountUsersQueryQueryVariables>;
export const CheckIfUserIsOwnerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkIfUserIsOwnerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkIfUserIsOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<CheckIfUserIsOwnerQueryQuery, CheckIfUserIsOwnerQueryQueryVariables>;
export const WhoAmIQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"whoAmIQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoAmI"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<WhoAmIQueryQuery, WhoAmIQueryQueryVariables>;
export const CountAllAccountAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAllAccountAuthorsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAllAccountAuthors"}}]}}]} as unknown as DocumentNode<CountAllAccountAuthorsQueryQuery, CountAllAccountAuthorsQueryQueryVariables>;
export const DirectoryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_parent_parent_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_right_right_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_left_left_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_children_children_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}}]}}]} as unknown as DocumentNode<DirectoryQueryQuery, DirectoryQueryQueryVariables>;
export const DirectoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectoryFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_files_files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_lines_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directories_contribution_filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_parent_parent_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_right_right_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_left_left_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_children_children_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_files_files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_lines_filter"}}}]},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directories_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countFilesOfDirectory"}}]}}]}}]} as unknown as DocumentNode<DirectoriesQueryQuery, DirectoriesQueryQueryVariables>;
export const DirectoriesContributedByProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"directoriesContributedByProfileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directoriesContributedByProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}]} as unknown as DocumentNode<DirectoriesContributedByProfileQueryQuery, DirectoriesContributedByProfileQueryQueryVariables>;
export const ExEmployeesLinesPerCompanyTeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"exEmployeesLinesPerCompanyTeamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exEmployeesLinesPerCompanyTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ExEmployeesLinesPerCompanyTeamsQueryQuery, ExEmployeesLinesPerCompanyTeamsQueryQueryVariables>;
export const DepthNotesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"depthNotesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depthNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"directories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DepthNotesQueryQuery, DepthNotesQueryQueryVariables>;
export const RunsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"runsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<RunsQueryQuery, RunsQueryQueryVariables>;
export const RunQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"runQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"run"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<RunQueryQuery, RunQueryQueryVariables>;
export const FilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files_contribution_filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"contribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files_contribution_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamsContribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profilesContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exContributions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<FilesQueryQuery, FilesQueryQueryVariables>;
export const CountFilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countFilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountFilesQueryQuery, CountFilesQueryQueryVariables>;
export const CountDirectoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countDirectoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countDirectories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountDirectoriesQueryQuery, CountDirectoriesQueryQueryVariables>;
export const CountLinesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countLinesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countLines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountLinesQueryQuery, CountLinesQueryQueryVariables>;
export const CountAllAccountLinesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAllAccountLinesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAllAccountLines"}}]}}]} as unknown as DocumentNode<CountAllAccountLinesQueryQuery, CountAllAccountLinesQueryQueryVariables>;
export const ContributionsPerDayPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionsPerDayPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionsPerDayPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ContributionsPerDayPerQueryQuery, ContributionsPerDayPerQueryQueryVariables>;
export const ContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<ContributionsPerQueryQuery, ContributionsPerQueryQueryVariables>;
export const FilesContributedByProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filesContributedByProfileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filesContributedByProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}]} as unknown as DocumentNode<FilesContributedByProfileQueryQuery, FilesContributedByProfileQueryQueryVariables>;
export const GetProfileByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetProfileByIdQueryQuery, GetProfileByIdQueryQueryVariables>;
export const GetProfileDataByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileDataByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetProfileDataByIdQueryQuery, GetProfileDataByIdQueryQueryVariables>;
export const ProfilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assigned"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"assigned"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assigned"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<ProfilesQueryQuery, ProfilesQueryQueryVariables>;
export const CountProfilesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countProfilesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountProfilesQueryQuery, CountProfilesQueryQueryVariables>;
export const CountAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countAuthorsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countAuthors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountAuthorsQueryQuery, CountAuthorsQueryQueryVariables>;
export const GetAuthorsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthorsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<GetAuthorsQueryQuery, GetAuthorsQueryQueryVariables>;
export const PrContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrContributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrContributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrContributionsPerQueryQuery, PrContributionsPerQueryQueryVariables>;
export const AveragePrsTimeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"averagePrsTimeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averagePrsTime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<AveragePrsTimeQueryQuery, AveragePrsTimeQueryQueryVariables>;
export const PrContributionsPerDayPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrContributionsPerDayPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrContributionsPerDayPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrContributionsPerDayPerQueryQuery, PrContributionsPerDayPerQueryQueryVariables>;
export const CountPullRequestsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countPullRequestsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countPullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountPullRequestsQueryQuery, CountPullRequestsQueryQueryVariables>;
export const PrReviewContributionsPerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrReviewContributionsPerQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PrReviewContributionsPer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<PrReviewContributionsPerQueryQuery, PrReviewContributionsPerQueryQueryVariables>;
export const AverageReviewTimeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"averageReviewTimeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageReviewTime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<AverageReviewTimeQueryQuery, AverageReviewTimeQueryQueryVariables>;
export const CountPrReviewsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countPrReviewsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countPrReviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountPrReviewsQueryQuery, CountPrReviewsQueryQueryVariables>;
export const SearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"runId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]} as unknown as DocumentNode<SearchQueryQuery, SearchQueryQueryVariables>;
export const TeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileIds"}}]}}]}}]} as unknown as DocumentNode<TeamsQueryQuery, TeamsQueryQueryVariables>;
export const GetTeamByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeamById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileIds"}}]}}]}}]} as unknown as DocumentNode<GetTeamByIdQueryQuery, GetTeamByIdQueryQueryVariables>;
export const CountTeamsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countTeamsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CountTeamsQueryQuery, CountTeamsQueryQueryVariables>;
export const GithubLoginUrlQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubLoginUrlQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubLoginUrl"}}]}}]} as unknown as DocumentNode<GithubLoginUrlQueryQuery, GithubLoginUrlQueryQueryVariables>;
export const GithubManageInstallationsUrlQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"githubManageInstallationsUrlQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubManageInstallationsUrl"}}]}}]} as unknown as DocumentNode<GithubManageInstallationsUrlQueryQuery, GithubManageInstallationsUrlQueryQueryVariables>;
export const GetAccessTokenQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccessTokenQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<GetAccessTokenQueryQuery, GetAccessTokenQueryQueryVariables>;
export const GetInstallationsListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInstallationsListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInstallationsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetInstallationsListQueryQuery, GetInstallationsListQueryQueryVariables>;
export const GetReposListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReposListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getReposList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"installationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}}]}}]}}]} as unknown as DocumentNode<GetReposListQueryQuery, GetReposListQueryQueryVariables>;
export const UpdateRunQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"updateRunQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<UpdateRunQueryQuery, UpdateRunQueryQueryVariables>;
export const GetPortalLinkQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPortalLinkQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPortalLink"}}]}}]} as unknown as DocumentNode<GetPortalLinkQueryQuery, GetPortalLinkQueryQueryVariables>;
export const SignupMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signupMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"SignupAccountInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"SignupAccountInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"SignupAccountInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignupMutationMutation, SignupMutationMutationVariables>;
export const AddUsersToAccountMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUsersToAccountMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUsersToAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}]}]}}]} as unknown as DocumentNode<AddUsersToAccountMutationMutation, AddUsersToAccountMutationMutationVariables>;
export const RemoveUserFromAccountMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUserFromAccountMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUserFromAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemoveUserFromAccountMutationMutation, RemoveUserFromAccountMutationMutationVariables>;
export const AddAmidnMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAmidnMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAmidn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<AddAmidnMutationMutation, AddAmidnMutationMutationVariables>;
export const RemoveAmidnMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAmidnMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAmidn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemoveAmidnMutationMutation, RemoveAmidnMutationMutationVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const LogoutMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LogoutMutationMutation, LogoutMutationMutationVariables>;
export const ForgetPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgetPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ForgetPasswordMutationMutation, ForgetPasswordMutationMutationVariables>;
export const ConfirmResetPasswordMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"confirmResetPasswordMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ConfirmResetPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ConfirmResetPasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ConfirmResetPasswordMutationMutation, ConfirmResetPasswordMutationMutationVariables>;
export const ImportMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"import"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"run"}}]}}]}}]} as unknown as DocumentNode<ImportMutationMutation, ImportMutationMutationVariables>;
export const UpdateRunNameMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRunNameMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRunName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"runName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<UpdateRunNameMutationMutation, UpdateRunNameMutationMutationVariables>;
export const CreateProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CreateProfileInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"CreateProfileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CreateProfileInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>;
export const CreateProfilesBasedOnSimilarityMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProfilesBasedOnSimilarityMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfilesBasedOnSimilarity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<CreateProfilesBasedOnSimilarityMutationMutation, CreateProfilesBasedOnSimilarityMutationMutationVariables>;
export const SetTeamIdForProfileWithNullMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setTeamIDForProfileWithNullMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setTeamIDForProfileWithNull"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SetTeamIdForProfileWithNullMutationMutation, SetTeamIdForProfileWithNullMutationMutationVariables>;
export const MarkProfileAsExMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markProfileAsExMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exState"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markProfileAsEx"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"exState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<MarkProfileAsExMutationMutation, MarkProfileAsExMutationMutationVariables>;
export const StoreProfilesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"storeProfilesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ProfilesAlignInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfilesAlignInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ProfilesAlignInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ProfilesAlignInput"}}}]}]}}]} as unknown as DocumentNode<StoreProfilesMutationMutation, StoreProfilesMutationMutationVariables>;
export const AssignAuthorToProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"assignAuthorToProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignAuthorToProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<AssignAuthorToProfileMutationMutation, AssignAuthorToProfileMutationMutationVariables>;
export const UnassignAuthorToProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unassignAuthorToProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unassignAuthorToProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"ex"}},{"kind":"Field","name":{"kind":"Name","value":"generated"}},{"kind":"Field","name":{"kind":"Name","value":"authorIds"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastChange"}}]}}]}}]} as unknown as DocumentNode<UnassignAuthorToProfileMutationMutation, UnassignAuthorToProfileMutationMutationVariables>;
export const DevelopersWithLowContributionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"developersWithLowContributionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contribution"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"developersWithLowContribution"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contribution"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contribution"}}}]}]}}]} as unknown as DocumentNode<DevelopersWithLowContributionMutationMutation, DevelopersWithLowContributionMutationMutationVariables>;
export const DevelopersWorkingTogetherMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"developersWorkingTogetherMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamsNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"developersWorkingTogether"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamsNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamsNumber"}}}]}]}}]} as unknown as DocumentNode<DevelopersWorkingTogetherMutationMutation, DevelopersWorkingTogetherMutationMutationVariables>;
export const RemoveTeamMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeTeamMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}}]}]}}]} as unknown as DocumentNode<RemoveTeamMutationMutation, RemoveTeamMutationMutationVariables>;
export const StoreTeamsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"storeTeamsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"runId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teams"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"runId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"runId"}}},{"kind":"Argument","name":{"kind":"Name","value":"teams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teams"}}}]}]}}]} as unknown as DocumentNode<StoreTeamsMutationMutation, StoreTeamsMutationMutationVariables>;
export const SelectARepoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"selectARepoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GithubRepoInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectARepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}},{"kind":"Argument","name":{"kind":"Name","value":"installationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<SelectARepoMutationMutation, SelectARepoMutationMutationVariables>;
export const CloneRepoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cloneRepoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CloneRepo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cloneRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"repo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commitId"}},{"kind":"Field","name":{"kind":"Name","value":"installationId"}},{"kind":"Field","name":{"kind":"Name","value":"repoId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"beingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"prBeingHandled"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"extractedFiles"}},{"kind":"Field","name":{"kind":"Name","value":"countProfiles"}},{"kind":"Field","name":{"kind":"Name","value":"countTeams"}}]}}]}}]} as unknown as DocumentNode<CloneRepoMutationMutation, CloneRepoMutationMutationVariables>;
