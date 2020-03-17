import React, { Component } from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <tr>
        <td bgcolor="#ff6600">
          <table style={{ 'padding': '2px' }} width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td style={{ 'width':'18px', 'padding-right':'4px' }}>
                  <a href="https://news.ycombinator.com">
                    <img src="y18.gif" style={{ 'border': '1px white solid' }} width="18" height="18" />
                  </a>
                </td>
                <tbody>
                  <tr>
                    <td style={{ 'width':'18px', 'padding-right': '4px' }}>
                      <a href="https://news.ycombinator.com">
                        <img src="y18.gif" style={{ 'border': '1px white solid' }} width="18" height="18" />
                      </a>
                    </td>
                    <td style={{ 'line-height':'12pt', 'height': '10px' }}>
                      <span class="pagetop">
                        <b class="hnname">
                          <a href="/news">
                            Hacker News
                          </a>
                        </b>
                        <a href="/newest">new</a>
                          |
                        <a href="/front">past</a>
                          |
                        <a href="/newcomments">comments</a>
                          |
                        <a href="/ask">ask</a>
                          |
                        <a href="/show">show</a>
                          |
                        <a href="/jobs">jobs</a>
                          |
                        <a href="/submit">submit</a>
                          |
                        <font color="#ffffff">from</font>
                      </span>
                    </td>
                    <td style={{ 'text-align':'right', 'padding-right':'4px' }}>
                      <span class="pagetop">
                          <a href="login?goto=from%3Fsite%3Dhelpnetsecurity.com">login</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
}