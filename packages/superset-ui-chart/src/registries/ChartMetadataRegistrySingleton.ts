import { Registry, makeSingleton, OverwritePolicy } from '@superset-ui/core';
import ChartMetadata from '../models/ChartMetadata';

class ChartMetadataRegistry extends Registry<ChartMetadata, ChartMetadata> {
  constructor() {
    super({ name: 'ChartMetadata', overwritePolicy: OverwritePolicy.WARN });
  }
}

const getInstance = makeSingleton(ChartMetadataRegistry);

export default getInstance;
