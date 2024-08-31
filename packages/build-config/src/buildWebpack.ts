import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const isDev = options.mode === 'development';
	const { paths } = options;

	return {
		mode: options.mode ?? 'development',
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		module: {
			rules: buildLoaders(options),
		},
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
