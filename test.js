import test from "ava";
import r from ".";

test("Is regular expression", t => {
	t.true(r("/^a/"));
	t.true(r("/z$/"));
	t.true(r("/\u005c\u005c/"));
	t.true(r("/\\s/"));
	t.true(r("/\u005c\u005c\u005c\u005c/"));
	t.true(r("/\\\\/"));
	t.true(r("/\\[/"));
	t.true(r("/]/"));
	t.true(r("/(foo|)/")); // Valid RegExp, but matches everything
	t.true(r("/(foo|bar)/"));
	t.true(r("/b[aeiou]g/"));
	t.true(r("/b[aeiou]g/g"));
	t.true(r("/b[aeiou]g/migyu"));
});

test("Is not a regular expression", t => {
	t.false(r(""));
	t.false(r("/"));
	t.false(r("//"));
	// Single backslash
	t.false(r("\u005c"));
	t.false(r("/\u005c/"));
	// Double backslash
	t.false(r("\\"));
	t.false(r("/\\/"));
	// Triple backslash
	t.false(r("\u005c\u005c\u005c"));
	t.false(r("/\u005c\u005c\u005c/"));
	t.false(r("/g"));
	t.false(r("g/"));
	t.false(r("/g"));
	t.false(r("/[/"));
	t.false(r("/(/"));
	t.false(r("/)/"));
	t.false(r("/b[aeiou]g/0"));
	t.false(r("/b/gmg"));
});
