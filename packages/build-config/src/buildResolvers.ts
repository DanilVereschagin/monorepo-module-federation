import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';
import path from 'path';

export function buildResolvers(
	options: BuildOptions
): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@': options.paths.src,
		},
	};
}
