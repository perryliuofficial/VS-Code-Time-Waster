/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


import * as vscode from 'vscode';

let rick: vscode.StatusBarItem;
let wordle: vscode.StatusBarItem;
let reddit: vscode.StatusBarItem;
let doodle: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {

	const rickId = 'vs-code-time-waster.rick';
	subscriptions.push(vscode.commands.registerCommand(rickId, () => {
		vscode.env.openExternal(vscode.Uri.parse("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
	}));
	rick = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	rick.command = rickId;
	rick.text = "Rick Roll";
	rick.show();
	subscriptions.push(rick);

	const wordleId = 'vs-code-time-waster.overflow';
	subscriptions.push(vscode.commands.registerCommand(wordleId, () => {
		vscode.env.openExternal(vscode.Uri.parse("https://www.nytimes.com/games/wordle/index.html"));
	}));
	wordle = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 90);
	wordle.command = wordleId;
	wordle.text = "Wordle";
	wordle.show();
	subscriptions.push(wordle);

	const redditId = 'vs-code-time-waster.reddit';
	subscriptions.push(vscode.commands.registerCommand(redditId, () => {
		vscode.env.openExternal(vscode.Uri.parse("https://www.reddit.com/r/ProgrammerHumor/"));
	}));
	reddit = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 80);
	reddit.command = redditId;
	reddit.text = "Reddit";
	reddit.show();
	subscriptions.push(reddit);

	const doodleId = 'vs-code-time-waster.doodle';
	subscriptions.push(vscode.commands.registerCommand(doodleId, () => {
		vscode.env.openExternal(vscode.Uri.parse("https://www.google.com/doodles?q=interactive"));
	}));
	doodle = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 70);
	doodle.command = doodleId;
	doodle.text = "Doodles";
	doodle.show();
	subscriptions.push(doodle);

}