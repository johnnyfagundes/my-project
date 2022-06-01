export type TRemoteTypes = 'RemotineHome' | 'RemotineFeature' | 'FeatureTest';

export const remoteKeys: {[key in TRemoteTypes]: boolean | string} = {
  RemotineHome: '#cecece',
  RemotineFeature: true,
  FeatureTest: false,
};