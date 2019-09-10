import { navigator } from './window';

let Vue, Vuex, I18n, App;

class Execution
{
	// Constructor
	constructor ()
	{
		this.preset = {};

		this.kit = {};
		this.api = {};

		this.logic = () => {}
	}

	// Word Caser
	caser ( word )
	{
		return word.substr(0, 1).toUpperCase() + word.substr(1);
	}

	// Language
	language ()
	{
		return localStorage.getItem('language') || ( navigator.language || navigator.browserLanguage ).toLowerCase();
	}

	// Core Inject
	inject ( core, command, extension, mode )
	{
		switch ( mode )
		{
			case 'prototype':

				return core.prototype[ this.caser( command ) ] = extension;

			default:

				return core[ this.caser( command ) ] = extension;
		}

	}

	// Sketch Then
	sketch(

		secure,

		mothy,

		def = [Vue, App]

	)
	{
		return {

			then ( fn )
			{
				return fn.apply( this, def.concat( [ secure, mothy ] ) );
			}

		}
	}

	// Import Package
	importer (

		// Bundles
		bundles = '',

		// Excess
		excess = ( resource ) => {

			return resource.default || resource;

		}

	)
	{
		return excess( this.logic( bundles ) );
	}

	// Donate Package
	donate (

		command,

		caser,

		grind = ( command, callback = () => {} ) => {

			return callback( this[ command ] = this.importer( command ) );

		}

	)
	{
		return grind( command, ( Mod, Agent = {} ) => {

			switch ( command )
			{
				case 'config':

					Object.assign( Vue.config, Mod );

					break;

				case 'kit':

					Object.assign( Mod, Mod.strip( Vue.prototype, Vue.prototype.preset ? Vue.prototype.preset.kit : {} ) );

					break;
			}

			this.inject( Vue, command, Mod, 'prototype' );

			return Mod;

		});
	}

	// Recursion Run
	recursion ( queue = [], callback = () => {}, group = {} )
	{
		if ( queue.length )
		{
			return (

				( command ) => {

					return group[ command ] = callback( command );

				}
			)

			( queue.shift() ), this.recursion.call( this, queue, callback, group );
		}

		return group;
	}

	// Processor Factory
	processor ( queue, spring )
	{
		return this.recursion( queue, ( command ) => {

			return (

				( mod ) => {

					return spring( mod, command ) || mod;

				}
			)

			( this.donate( command ) );

		});
	}

	// Servant Build
	servant ( secure, mothy )
	{
		return (

			( secure, mothy ) => {

				return this.sketch( secure, mothy );

			}

		)
		(
			this.processor( secure, ( mod, command ) => {

				this.inject( window, command, mod );

			}),

			this.processor( mothy, ( mod, command ) => {

				switch ( command )
				{
					case 'store':

						return new Vuex.Store( mod );

					case 'i18n':

						return new I18n({

							locale: this.language() || 'zh-cn',

							messages: mod

						});

				}

			})
		);

	}

	init ( vue, vuex, i18n, app, inv = {} )
	{
		Vue = vue, Vuex = vuex, I18n = i18n, App = app;

		if ( inv.logic )
		{
			this.logic = inv.logic;
		}

		return this.servant( inv.secure, inv.mothy );
	}
}

export default new Execution();
